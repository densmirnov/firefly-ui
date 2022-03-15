// Copyright © 2022 Kaleido, Inc.
//
// SPDX-License-Identifier: Apache-2.0
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import DownloadIcon from '@mui/icons-material/Download';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCreatedFilter } from '../../../components/Filters/utils';
import { Header } from '../../../components/Header';
import { ChartTableHeader } from '../../../components/Headers/ChartTableHeader';
import { HashPopover } from '../../../components/Popovers/HashPopover';
import { DataTable } from '../../../components/Tables/Table';
import { ApplicationContext } from '../../../contexts/ApplicationContext';
import { SnackbarContext } from '../../../contexts/SnackbarContext';
import {
  FF_Paths,
  ICreatedFilter,
  IData,
  IDataTableRecord,
  IPagedDataResponse,
} from '../../../interfaces';
import { DEFAULT_PADDING, DEFAULT_PAGE_LIMITS } from '../../../theme';
import { downloadBlobFile, fetchCatcher } from '../../../utils';

export const OffChainData: () => JSX.Element = () => {
  const { createdFilter, selectedNamespace } = useContext(ApplicationContext);
  const { reportFetchError } = useContext(SnackbarContext);
  const { t } = useTranslation();
  // Data
  const [data, setData] = useState<IData[]>();
  // Data total
  const [dataTotal, setDataTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_PAGE_LIMITS[1]);

  // Data
  useEffect(() => {
    const createdFilterObject: ICreatedFilter = getCreatedFilter(createdFilter);
    fetchCatcher(
      `${FF_Paths.nsPrefix}/${selectedNamespace}${
        FF_Paths.data
      }?limit=${rowsPerPage}&count&skip=${rowsPerPage * currentPage}${
        createdFilterObject.filterString
      }`
    )
      .then((dataRes: IPagedDataResponse) => {
        setData(dataRes.items);
        setDataTotal(dataRes.total);
      })
      .catch((err) => {
        reportFetchError(err);
      });
  }, [rowsPerPage, currentPage, selectedNamespace]);

  const dataColHeaders = [
    t('id'),
    t('validator'),
    t('dataHash'),
    t('blobName'),
    t('blobSize'),
    t('created'),
  ];

  const dataRecords: IDataTableRecord[] | undefined = data?.map((d) => ({
    key: d.id,
    columns: [
      {
        value: <HashPopover shortHash address={d.id}></HashPopover>,
      },
      {
        value: <Typography>{d.validator}</Typography>,
      },
      {
        value: <HashPopover shortHash address={d.hash}></HashPopover>,
      },
      {
        value: d.blob?.name && (
          <HashPopover address={d.blob.name}></HashPopover>
        ),
      },
      {
        value: d.blob && <Typography>{d.blob?.size}</Typography>,
      },
      {
        value: dayjs(d.created).format('MM/DD/YYYY h:mm A'),
      },
      {
        value: d.blob && (
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              downloadBlobFile(d.id, d.blob?.name);
            }}
          >
            <DownloadIcon />
          </IconButton>
        ),
      },
    ],
  }));

  return (
    <>
      <Header title={t('data')} subtitle={t('offChain')}></Header>
      <Grid container px={DEFAULT_PADDING}>
        <Grid container item wrap="nowrap" direction="column">
          <ChartTableHeader
            title={t('allData')}
            filter={
              <Button variant="outlined">
                <Typography p={0.75} sx={{ fontSize: 12 }}>
                  {t('filter')}
                </Typography>
              </Button>
            }
          />
          <DataTable
            onHandleCurrPageChange={(currentPage: number) =>
              setCurrentPage(currentPage)
            }
            onHandleRowsPerPage={(rowsPerPage: number) =>
              setRowsPerPage(rowsPerPage)
            }
            stickyHeader={true}
            minHeight="300px"
            maxHeight="calc(100vh - 340px)"
            records={dataRecords}
            columnHeaders={dataColHeaders}
            paginate={true}
            emptyStateText={t('noDataToDisplay')}
            dataTotal={dataTotal}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
          />
        </Grid>
      </Grid>
    </>
  );
};
