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

export interface ITimeFilterObject {
  filterString: string;
  filterShortString: any;
  filterTime: number;
}

export const times = ['1hour', '24hours', '7days', '30days'];

export enum TimeFilterEnum {
  '1hour' = '1hour',
  '24hours' = '24hours',
  '7days' = '7days',
  '30days' = '30days',
}

export const ApiFilters = ['id', 'name', 'interface'];

export const ApprovalFilters = [
  'localid',
  'pool',
  'connector',
  'namespace',
  'key',
  'operator',
  'approved',
  'protocolid',
  'subject',
  'active',
  'created',
  'tx.type',
  'tx.id',
  'blockchainevent',
];

export const BalanceFilters = [
  'pool',
  'tokenindex',
  'uri',
  'connector',
  'namespace',
  'key',
  'balance',
  'updated',
];

export const BatchFilters = [
  'id',
  'namespace',
  'type',
  'author',
  'key',
  'group',
  'hash',
  'payloadref',
  'created',
  'confirmed',
  'tx.type',
  'tx.id',
  'node',
];

export const BlockchainEventFilters = [
  'id',
  'source',
  'namespace',
  'name',
  'protocolid',
  'listener',
  'tx.type',
  'tx.id',
  'tx.blockchainid',
  'timestamp',
];

export const InterfaceFilters = ['id', 'name', 'namespace', 'version'];

export const DataFilters = [
  'id',
  'namespace',
  'validator',
  'datatype.name',
  'datatype.version',
  'hash',
  'blob.hash',
  'blob.public',
  'blob.name',
  'blob.size',
  'created',
  'value',
];

export const DatatypesFilters = [
  'id',
  'message',
  'namespace',
  'validator',
  'name',
  'version',
  'created',
];

export const EventFilters = [
  'id',
  'type',
  'namespace',
  'reference',
  'correlator',
  'tx',
  'topic',
  'sequence',
  'created',
];

export const GroupFilters = [
  'hash',
  'message',
  'namespace',
  'description',
  'ledger',
  'created',
];

export const IdentityFilters = [
  'id',
  'did',
  'parent',
  'messages.claim',
  'messages.verification',
  'messages.update',
  'type',
  'namespace',
  'name',
  'description',
  'profile',
  'created',
  'updated',
];

export const ListenerFilters = [
  'id',
  'interface',
  'namespace',
  'location',
  'topic',
  'signature',
  'backendid',
  'created',
];

export const MessageFilters = [
  'id',
  'cid',
  'namespace',
  'type',
  'author',
  'key',
  'topics',
  'tag',
  'group',
  'created',
  'hash',
  'pins',
  'state',
  'confirmed',
  'sequence',
  'txtype',
  'batch',
];

export const NamespaceFilters = [
  'id',
  'message',
  'type',
  'name',
  'description',
  'created',
  'confirmed',
];

export const OperationFilters = [
  'id',
  'tx',
  'type',
  'namespace',
  'status',
  'error',
  'plugin',
  'input',
  'output',
  'created',
  'updated',
  'retry',
];

export const PoolFilters = [
  'id',
  'type',
  'namespace',
  'name',
  'standard',
  'locator',
  'symbol',
  'decimals',
  'message',
  'state',
  'created',
  'connector',
  'tx.type',
  'tx.id',
];

export const SubscriptionFilters = [
  'id',
  'namespace',
  'name',
  'transport',
  'events',
  'filters',
  'options',
  'created',
];

export const TransactionFilters = [
  'id',
  'type',
  'created',
  'blockchainids',
  'namespace',
];

export const TransferFilters = [
  'localid',
  'pool',
  'tokenindex',
  'uri',
  'connector',
  'namespace',
  'key',
  'from',
  'to',
  'amount',
  'protocolid',
  'message',
  'messagehash',
  'created',
  'tx.type',
  'tx.id',
  'blockchainevent',
  'type',
];
