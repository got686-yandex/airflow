// generated with @7nohe/openapi-react-query-codegen@1.6.2
import { type QueryClient } from "@tanstack/react-query";

import {
  AssetService,
  AuthLinksService,
  BackfillService,
  ConfigService,
  ConnectionService,
  DagReportService,
  DagRunService,
  DagService,
  DagSourceService,
  DagStatsService,
  DagVersionService,
  DagWarningService,
  DagsService,
  DashboardService,
  DefaultService,
  DependenciesService,
  EventLogService,
  ExtraLinksService,
  GridService,
  ImportErrorService,
  JobService,
  LoginService,
  MonitorService,
  PluginService,
  PoolService,
  ProviderService,
  StructureService,
  TaskInstanceService,
  TaskService,
  VariableService,
  VersionService,
  XcomService,
} from "../requests/services.gen";
import { DagRunState, DagWarningType } from "../requests/types.gen";
import * as Common from "./common";

/**
 * Get Auth Menus
 * @returns MenuItemCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseAuthLinksServiceGetAuthMenus = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseAuthLinksServiceGetAuthMenusKeyFn(),
    queryFn: () => AuthLinksService.getAuthMenus(),
  });
/**
 * Next Run Assets
 * @param data The data for the request.
 * @param data.dagId
 * @returns unknown Successful Response
 * @throws ApiError
 */
export const prefetchUseAssetServiceNextRunAssets = (
  queryClient: QueryClient,
  {
    dagId,
  }: {
    dagId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseAssetServiceNextRunAssetsKeyFn({ dagId }),
    queryFn: () => AssetService.nextRunAssets({ dagId }),
  });
/**
 * Get Assets
 * Get assets.
 * @param data The data for the request.
 * @param data.limit
 * @param data.offset
 * @param data.namePattern
 * @param data.uriPattern
 * @param data.dagIds
 * @param data.onlyActive
 * @param data.orderBy
 * @returns AssetCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseAssetServiceGetAssets = (
  queryClient: QueryClient,
  {
    dagIds,
    limit,
    namePattern,
    offset,
    onlyActive,
    orderBy,
    uriPattern,
  }: {
    dagIds?: string[];
    limit?: number;
    namePattern?: string;
    offset?: number;
    onlyActive?: boolean;
    orderBy?: string;
    uriPattern?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseAssetServiceGetAssetsKeyFn({
      dagIds,
      limit,
      namePattern,
      offset,
      onlyActive,
      orderBy,
      uriPattern,
    }),
    queryFn: () =>
      AssetService.getAssets({ dagIds, limit, namePattern, offset, onlyActive, orderBy, uriPattern }),
  });
/**
 * Get Asset Aliases
 * Get asset aliases.
 * @param data The data for the request.
 * @param data.limit
 * @param data.offset
 * @param data.namePattern
 * @param data.orderBy
 * @returns AssetAliasCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseAssetServiceGetAssetAliases = (
  queryClient: QueryClient,
  {
    limit,
    namePattern,
    offset,
    orderBy,
  }: {
    limit?: number;
    namePattern?: string;
    offset?: number;
    orderBy?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseAssetServiceGetAssetAliasesKeyFn({ limit, namePattern, offset, orderBy }),
    queryFn: () => AssetService.getAssetAliases({ limit, namePattern, offset, orderBy }),
  });
/**
 * Get Asset Alias
 * Get an asset alias.
 * @param data The data for the request.
 * @param data.assetAliasId
 * @returns unknown Successful Response
 * @throws ApiError
 */
export const prefetchUseAssetServiceGetAssetAlias = (
  queryClient: QueryClient,
  {
    assetAliasId,
  }: {
    assetAliasId: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseAssetServiceGetAssetAliasKeyFn({ assetAliasId }),
    queryFn: () => AssetService.getAssetAlias({ assetAliasId }),
  });
/**
 * Get Asset Events
 * Get asset events.
 * @param data The data for the request.
 * @param data.limit
 * @param data.offset
 * @param data.orderBy
 * @param data.assetId
 * @param data.sourceDagId
 * @param data.sourceTaskId
 * @param data.sourceRunId
 * @param data.sourceMapIndex
 * @param data.timestampGte
 * @param data.timestampLte
 * @returns AssetEventCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseAssetServiceGetAssetEvents = (
  queryClient: QueryClient,
  {
    assetId,
    limit,
    offset,
    orderBy,
    sourceDagId,
    sourceMapIndex,
    sourceRunId,
    sourceTaskId,
    timestampGte,
    timestampLte,
  }: {
    assetId?: number;
    limit?: number;
    offset?: number;
    orderBy?: string;
    sourceDagId?: string;
    sourceMapIndex?: number;
    sourceRunId?: string;
    sourceTaskId?: string;
    timestampGte?: string;
    timestampLte?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseAssetServiceGetAssetEventsKeyFn({
      assetId,
      limit,
      offset,
      orderBy,
      sourceDagId,
      sourceMapIndex,
      sourceRunId,
      sourceTaskId,
      timestampGte,
      timestampLte,
    }),
    queryFn: () =>
      AssetService.getAssetEvents({
        assetId,
        limit,
        offset,
        orderBy,
        sourceDagId,
        sourceMapIndex,
        sourceRunId,
        sourceTaskId,
        timestampGte,
        timestampLte,
      }),
  });
/**
 * Get Asset Queued Events
 * Get queued asset events for an asset.
 * @param data The data for the request.
 * @param data.assetId
 * @param data.before
 * @returns QueuedEventCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseAssetServiceGetAssetQueuedEvents = (
  queryClient: QueryClient,
  {
    assetId,
    before,
  }: {
    assetId: number;
    before?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseAssetServiceGetAssetQueuedEventsKeyFn({ assetId, before }),
    queryFn: () => AssetService.getAssetQueuedEvents({ assetId, before }),
  });
/**
 * Get Asset
 * Get an asset.
 * @param data The data for the request.
 * @param data.assetId
 * @returns AssetResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseAssetServiceGetAsset = (
  queryClient: QueryClient,
  {
    assetId,
  }: {
    assetId: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseAssetServiceGetAssetKeyFn({ assetId }),
    queryFn: () => AssetService.getAsset({ assetId }),
  });
/**
 * Get Dag Asset Queued Events
 * Get queued asset events for a DAG.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.before
 * @returns QueuedEventCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseAssetServiceGetDagAssetQueuedEvents = (
  queryClient: QueryClient,
  {
    before,
    dagId,
  }: {
    before?: string;
    dagId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseAssetServiceGetDagAssetQueuedEventsKeyFn({ before, dagId }),
    queryFn: () => AssetService.getDagAssetQueuedEvents({ before, dagId }),
  });
/**
 * Get Dag Asset Queued Event
 * Get a queued asset event for a DAG.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.assetId
 * @param data.before
 * @returns QueuedEventResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseAssetServiceGetDagAssetQueuedEvent = (
  queryClient: QueryClient,
  {
    assetId,
    before,
    dagId,
  }: {
    assetId: number;
    before?: string;
    dagId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseAssetServiceGetDagAssetQueuedEventKeyFn({ assetId, before, dagId }),
    queryFn: () => AssetService.getDagAssetQueuedEvent({ assetId, before, dagId }),
  });
/**
 * Get Configs
 * Get configs for UI.
 * @returns ConfigResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseConfigServiceGetConfigs = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseConfigServiceGetConfigsKeyFn(),
    queryFn: () => ConfigService.getConfigs(),
  });
/**
 * Get Config
 * @param data The data for the request.
 * @param data.section
 * @param data.accept
 * @returns Config Successful Response
 * @throws ApiError
 */
export const prefetchUseConfigServiceGetConfig = (
  queryClient: QueryClient,
  {
    accept,
    section,
  }: {
    accept?: "application/json" | "text/plain" | "*/*";
    section?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseConfigServiceGetConfigKeyFn({ accept, section }),
    queryFn: () => ConfigService.getConfig({ accept, section }),
  });
/**
 * Get Config Value
 * @param data The data for the request.
 * @param data.section
 * @param data.option
 * @param data.accept
 * @returns Config Successful Response
 * @throws ApiError
 */
export const prefetchUseConfigServiceGetConfigValue = (
  queryClient: QueryClient,
  {
    accept,
    option,
    section,
  }: {
    accept?: "application/json" | "text/plain" | "*/*";
    option: string;
    section: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseConfigServiceGetConfigValueKeyFn({ accept, option, section }),
    queryFn: () => ConfigService.getConfigValue({ accept, option, section }),
  });
/**
 * Hook Meta Data
 * Retrieve information about available connection types (hook classes) and their parameters.
 * @returns ConnectionHookMetaData Successful Response
 * @throws ApiError
 */
export const prefetchUseConnectionServiceHookMetaData = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseConnectionServiceHookMetaDataKeyFn(),
    queryFn: () => ConnectionService.hookMetaData(),
  });
/**
 * Get Connection
 * Get a connection entry.
 * @param data The data for the request.
 * @param data.connectionId
 * @returns ConnectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseConnectionServiceGetConnection = (
  queryClient: QueryClient,
  {
    connectionId,
  }: {
    connectionId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseConnectionServiceGetConnectionKeyFn({ connectionId }),
    queryFn: () => ConnectionService.getConnection({ connectionId }),
  });
/**
 * Get Connections
 * Get all connection entries.
 * @param data The data for the request.
 * @param data.limit
 * @param data.offset
 * @param data.orderBy
 * @param data.connectionIdPattern
 * @returns ConnectionCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseConnectionServiceGetConnections = (
  queryClient: QueryClient,
  {
    connectionIdPattern,
    limit,
    offset,
    orderBy,
  }: {
    connectionIdPattern?: string;
    limit?: number;
    offset?: number;
    orderBy?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseConnectionServiceGetConnectionsKeyFn({ connectionIdPattern, limit, offset, orderBy }),
    queryFn: () => ConnectionService.getConnections({ connectionIdPattern, limit, offset, orderBy }),
  });
/**
 * Recent Dag Runs
 * Get recent DAG runs.
 * @param data The data for the request.
 * @param data.dagRunsLimit
 * @param data.limit
 * @param data.offset
 * @param data.tags
 * @param data.tagsMatchMode
 * @param data.owners
 * @param data.dagIds
 * @param data.dagIdPattern
 * @param data.dagDisplayNamePattern
 * @param data.onlyActive
 * @param data.paused
 * @param data.lastDagRunState
 * @returns DAGWithLatestDagRunsCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDagsServiceRecentDagRuns = (
  queryClient: QueryClient,
  {
    dagDisplayNamePattern,
    dagIdPattern,
    dagIds,
    dagRunsLimit,
    lastDagRunState,
    limit,
    offset,
    onlyActive,
    owners,
    paused,
    tags,
    tagsMatchMode,
  }: {
    dagDisplayNamePattern?: string;
    dagIdPattern?: string;
    dagIds?: string[];
    dagRunsLimit?: number;
    lastDagRunState?: DagRunState;
    limit?: number;
    offset?: number;
    onlyActive?: boolean;
    owners?: string[];
    paused?: boolean;
    tags?: string[];
    tagsMatchMode?: "any" | "all";
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagsServiceRecentDagRunsKeyFn({
      dagDisplayNamePattern,
      dagIdPattern,
      dagIds,
      dagRunsLimit,
      lastDagRunState,
      limit,
      offset,
      onlyActive,
      owners,
      paused,
      tags,
      tagsMatchMode,
    }),
    queryFn: () =>
      DagsService.recentDagRuns({
        dagDisplayNamePattern,
        dagIdPattern,
        dagIds,
        dagRunsLimit,
        lastDagRunState,
        limit,
        offset,
        onlyActive,
        owners,
        paused,
        tags,
        tagsMatchMode,
      }),
  });
/**
 * Get Dependencies
 * Dependencies graph.
 * @param data The data for the request.
 * @param data.nodeId
 * @returns BaseGraphResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDependenciesServiceGetDependencies = (
  queryClient: QueryClient,
  {
    nodeId,
  }: {
    nodeId?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDependenciesServiceGetDependenciesKeyFn({ nodeId }),
    queryFn: () => DependenciesService.getDependencies({ nodeId }),
  });
/**
 * Historical Metrics
 * Return cluster activity historical metrics.
 * @param data The data for the request.
 * @param data.startDate
 * @param data.endDate
 * @returns HistoricalMetricDataResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDashboardServiceHistoricalMetrics = (
  queryClient: QueryClient,
  {
    endDate,
    startDate,
  }: {
    endDate?: string;
    startDate: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDashboardServiceHistoricalMetricsKeyFn({ endDate, startDate }),
    queryFn: () => DashboardService.historicalMetrics({ endDate, startDate }),
  });
/**
 * Structure Data
 * Get Structure Data.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.includeUpstream
 * @param data.includeDownstream
 * @param data.root
 * @param data.externalDependencies
 * @param data.versionNumber
 * @returns StructureDataResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseStructureServiceStructureData = (
  queryClient: QueryClient,
  {
    dagId,
    externalDependencies,
    includeDownstream,
    includeUpstream,
    root,
    versionNumber,
  }: {
    dagId: string;
    externalDependencies?: boolean;
    includeDownstream?: boolean;
    includeUpstream?: boolean;
    root?: string;
    versionNumber?: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseStructureServiceStructureDataKeyFn({
      dagId,
      externalDependencies,
      includeDownstream,
      includeUpstream,
      root,
      versionNumber,
    }),
    queryFn: () =>
      StructureService.structureData({
        dagId,
        externalDependencies,
        includeDownstream,
        includeUpstream,
        root,
        versionNumber,
      }),
  });
/**
 * List Backfills
 * @param data The data for the request.
 * @param data.limit
 * @param data.offset
 * @param data.orderBy
 * @param data.dagId
 * @param data.active
 * @returns BackfillCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseBackfillServiceListBackfills = (
  queryClient: QueryClient,
  {
    active,
    dagId,
    limit,
    offset,
    orderBy,
  }: {
    active?: boolean;
    dagId?: string;
    limit?: number;
    offset?: number;
    orderBy?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseBackfillServiceListBackfillsKeyFn({ active, dagId, limit, offset, orderBy }),
    queryFn: () => BackfillService.listBackfills({ active, dagId, limit, offset, orderBy }),
  });
/**
 * List Backfills
 * @param data The data for the request.
 * @param data.dagId
 * @param data.limit
 * @param data.offset
 * @param data.orderBy
 * @returns BackfillCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseBackfillServiceListBackfills1 = (
  queryClient: QueryClient,
  {
    dagId,
    limit,
    offset,
    orderBy,
  }: {
    dagId: string;
    limit?: number;
    offset?: number;
    orderBy?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseBackfillServiceListBackfills1KeyFn({ dagId, limit, offset, orderBy }),
    queryFn: () => BackfillService.listBackfills1({ dagId, limit, offset, orderBy }),
  });
/**
 * Get Backfill
 * @param data The data for the request.
 * @param data.backfillId
 * @returns BackfillResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseBackfillServiceGetBackfill = (
  queryClient: QueryClient,
  {
    backfillId,
  }: {
    backfillId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseBackfillServiceGetBackfillKeyFn({ backfillId }),
    queryFn: () => BackfillService.getBackfill({ backfillId }),
  });
/**
 * Grid Data
 * Return grid data.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.includeUpstream
 * @param data.includeDownstream
 * @param data.root
 * @param data.offset
 * @param data.runType
 * @param data.state
 * @param data.limit
 * @param data.orderBy
 * @param data.runAfterGte
 * @param data.runAfterLte
 * @param data.logicalDateGte
 * @param data.logicalDateLte
 * @returns GridResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseGridServiceGridData = (
  queryClient: QueryClient,
  {
    dagId,
    includeDownstream,
    includeUpstream,
    limit,
    logicalDateGte,
    logicalDateLte,
    offset,
    orderBy,
    root,
    runAfterGte,
    runAfterLte,
    runType,
    state,
  }: {
    dagId: string;
    includeDownstream?: boolean;
    includeUpstream?: boolean;
    limit?: number;
    logicalDateGte?: string;
    logicalDateLte?: string;
    offset?: number;
    orderBy?: string;
    root?: string;
    runAfterGte?: string;
    runAfterLte?: string;
    runType?: string[];
    state?: string[];
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseGridServiceGridDataKeyFn({
      dagId,
      includeDownstream,
      includeUpstream,
      limit,
      logicalDateGte,
      logicalDateLte,
      offset,
      orderBy,
      root,
      runAfterGte,
      runAfterLte,
      runType,
      state,
    }),
    queryFn: () =>
      GridService.gridData({
        dagId,
        includeDownstream,
        includeUpstream,
        limit,
        logicalDateGte,
        logicalDateLte,
        offset,
        orderBy,
        root,
        runAfterGte,
        runAfterLte,
        runType,
        state,
      }),
  });
/**
 * Get Dag Run
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @returns DAGRunResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDagRunServiceGetDagRun = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
  }: {
    dagId: string;
    dagRunId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagRunServiceGetDagRunKeyFn({ dagId, dagRunId }),
    queryFn: () => DagRunService.getDagRun({ dagId, dagRunId }),
  });
/**
 * Get Upstream Asset Events
 * If dag run is asset-triggered, return the asset events that triggered it.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @returns AssetEventCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDagRunServiceGetUpstreamAssetEvents = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
  }: {
    dagId: string;
    dagRunId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagRunServiceGetUpstreamAssetEventsKeyFn({ dagId, dagRunId }),
    queryFn: () => DagRunService.getUpstreamAssetEvents({ dagId, dagRunId }),
  });
/**
 * Get Dag Runs
 * Get all DAG Runs.
 *
 * This endpoint allows specifying `~` as the dag_id to retrieve Dag Runs for all DAGs.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.limit
 * @param data.offset
 * @param data.runAfterGte
 * @param data.runAfterLte
 * @param data.logicalDateGte
 * @param data.logicalDateLte
 * @param data.startDateGte
 * @param data.startDateLte
 * @param data.endDateGte
 * @param data.endDateLte
 * @param data.updatedAtGte
 * @param data.updatedAtLte
 * @param data.state
 * @param data.orderBy
 * @returns DAGRunCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDagRunServiceGetDagRuns = (
  queryClient: QueryClient,
  {
    dagId,
    endDateGte,
    endDateLte,
    limit,
    logicalDateGte,
    logicalDateLte,
    offset,
    orderBy,
    runAfterGte,
    runAfterLte,
    startDateGte,
    startDateLte,
    state,
    updatedAtGte,
    updatedAtLte,
  }: {
    dagId: string;
    endDateGte?: string;
    endDateLte?: string;
    limit?: number;
    logicalDateGte?: string;
    logicalDateLte?: string;
    offset?: number;
    orderBy?: string;
    runAfterGte?: string;
    runAfterLte?: string;
    startDateGte?: string;
    startDateLte?: string;
    state?: string[];
    updatedAtGte?: string;
    updatedAtLte?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagRunServiceGetDagRunsKeyFn({
      dagId,
      endDateGte,
      endDateLte,
      limit,
      logicalDateGte,
      logicalDateLte,
      offset,
      orderBy,
      runAfterGte,
      runAfterLte,
      startDateGte,
      startDateLte,
      state,
      updatedAtGte,
      updatedAtLte,
    }),
    queryFn: () =>
      DagRunService.getDagRuns({
        dagId,
        endDateGte,
        endDateLte,
        limit,
        logicalDateGte,
        logicalDateLte,
        offset,
        orderBy,
        runAfterGte,
        runAfterLte,
        startDateGte,
        startDateLte,
        state,
        updatedAtGte,
        updatedAtLte,
      }),
  });
/**
 * Get Dag Source
 * Get source code using file token.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.versionNumber
 * @param data.accept
 * @returns DAGSourceResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDagSourceServiceGetDagSource = (
  queryClient: QueryClient,
  {
    accept,
    dagId,
    versionNumber,
  }: {
    accept?: "application/json" | "text/plain" | "*/*";
    dagId: string;
    versionNumber?: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagSourceServiceGetDagSourceKeyFn({ accept, dagId, versionNumber }),
    queryFn: () => DagSourceService.getDagSource({ accept, dagId, versionNumber }),
  });
/**
 * Get Dag Stats
 * Get Dag statistics.
 * @param data The data for the request.
 * @param data.dagIds
 * @returns DagStatsCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDagStatsServiceGetDagStats = (
  queryClient: QueryClient,
  {
    dagIds,
  }: {
    dagIds?: string[];
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagStatsServiceGetDagStatsKeyFn({ dagIds }),
    queryFn: () => DagStatsService.getDagStats({ dagIds }),
  });
/**
 * Get Dag Reports
 * Get DAG report.
 * @param data The data for the request.
 * @param data.subdir
 * @returns unknown Successful Response
 * @throws ApiError
 */
export const prefetchUseDagReportServiceGetDagReports = (
  queryClient: QueryClient,
  {
    subdir,
  }: {
    subdir: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagReportServiceGetDagReportsKeyFn({ subdir }),
    queryFn: () => DagReportService.getDagReports({ subdir }),
  });
/**
 * List Dag Warnings
 * Get a list of DAG warnings.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.warningType
 * @param data.limit
 * @param data.offset
 * @param data.orderBy
 * @returns DAGWarningCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDagWarningServiceListDagWarnings = (
  queryClient: QueryClient,
  {
    dagId,
    limit,
    offset,
    orderBy,
    warningType,
  }: {
    dagId?: string;
    limit?: number;
    offset?: number;
    orderBy?: string;
    warningType?: DagWarningType;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagWarningServiceListDagWarningsKeyFn({ dagId, limit, offset, orderBy, warningType }),
    queryFn: () => DagWarningService.listDagWarnings({ dagId, limit, offset, orderBy, warningType }),
  });
/**
 * Get Dags
 * Get all DAGs.
 * @param data The data for the request.
 * @param data.limit
 * @param data.offset
 * @param data.tags
 * @param data.tagsMatchMode
 * @param data.owners
 * @param data.dagIdPattern
 * @param data.dagDisplayNamePattern
 * @param data.onlyActive
 * @param data.paused
 * @param data.lastDagRunState
 * @param data.dagRunStartDateGte
 * @param data.dagRunStartDateLte
 * @param data.dagRunEndDateGte
 * @param data.dagRunEndDateLte
 * @param data.dagRunState
 * @param data.orderBy
 * @returns DAGCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDagServiceGetDags = (
  queryClient: QueryClient,
  {
    dagDisplayNamePattern,
    dagIdPattern,
    dagRunEndDateGte,
    dagRunEndDateLte,
    dagRunStartDateGte,
    dagRunStartDateLte,
    dagRunState,
    lastDagRunState,
    limit,
    offset,
    onlyActive,
    orderBy,
    owners,
    paused,
    tags,
    tagsMatchMode,
  }: {
    dagDisplayNamePattern?: string;
    dagIdPattern?: string;
    dagRunEndDateGte?: string;
    dagRunEndDateLte?: string;
    dagRunStartDateGte?: string;
    dagRunStartDateLte?: string;
    dagRunState?: string[];
    lastDagRunState?: DagRunState;
    limit?: number;
    offset?: number;
    onlyActive?: boolean;
    orderBy?: string;
    owners?: string[];
    paused?: boolean;
    tags?: string[];
    tagsMatchMode?: "any" | "all";
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagServiceGetDagsKeyFn({
      dagDisplayNamePattern,
      dagIdPattern,
      dagRunEndDateGte,
      dagRunEndDateLte,
      dagRunStartDateGte,
      dagRunStartDateLte,
      dagRunState,
      lastDagRunState,
      limit,
      offset,
      onlyActive,
      orderBy,
      owners,
      paused,
      tags,
      tagsMatchMode,
    }),
    queryFn: () =>
      DagService.getDags({
        dagDisplayNamePattern,
        dagIdPattern,
        dagRunEndDateGte,
        dagRunEndDateLte,
        dagRunStartDateGte,
        dagRunStartDateLte,
        dagRunState,
        lastDagRunState,
        limit,
        offset,
        onlyActive,
        orderBy,
        owners,
        paused,
        tags,
        tagsMatchMode,
      }),
  });
/**
 * Get Dag
 * Get basic information about a DAG.
 * @param data The data for the request.
 * @param data.dagId
 * @returns DAGResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDagServiceGetDag = (
  queryClient: QueryClient,
  {
    dagId,
  }: {
    dagId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagServiceGetDagKeyFn({ dagId }),
    queryFn: () => DagService.getDag({ dagId }),
  });
/**
 * Get Dag Details
 * Get details of DAG.
 * @param data The data for the request.
 * @param data.dagId
 * @returns DAGDetailsResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDagServiceGetDagDetails = (
  queryClient: QueryClient,
  {
    dagId,
  }: {
    dagId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagServiceGetDagDetailsKeyFn({ dagId }),
    queryFn: () => DagService.getDagDetails({ dagId }),
  });
/**
 * Get Dag Tags
 * Get all DAG tags.
 * @param data The data for the request.
 * @param data.limit
 * @param data.offset
 * @param data.orderBy
 * @param data.tagNamePattern
 * @returns DAGTagCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDagServiceGetDagTags = (
  queryClient: QueryClient,
  {
    limit,
    offset,
    orderBy,
    tagNamePattern,
  }: {
    limit?: number;
    offset?: number;
    orderBy?: string;
    tagNamePattern?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagServiceGetDagTagsKeyFn({ limit, offset, orderBy, tagNamePattern }),
    queryFn: () => DagService.getDagTags({ limit, offset, orderBy, tagNamePattern }),
  });
/**
 * Get Event Log
 * @param data The data for the request.
 * @param data.eventLogId
 * @returns EventLogResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseEventLogServiceGetEventLog = (
  queryClient: QueryClient,
  {
    eventLogId,
  }: {
    eventLogId: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventLogServiceGetEventLogKeyFn({ eventLogId }),
    queryFn: () => EventLogService.getEventLog({ eventLogId }),
  });
/**
 * Get Event Logs
 * Get all Event Logs.
 * @param data The data for the request.
 * @param data.limit
 * @param data.offset
 * @param data.orderBy
 * @param data.dagId
 * @param data.taskId
 * @param data.runId
 * @param data.mapIndex
 * @param data.tryNumber
 * @param data.owner
 * @param data.event
 * @param data.excludedEvents
 * @param data.includedEvents
 * @param data.before
 * @param data.after
 * @returns EventLogCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseEventLogServiceGetEventLogs = (
  queryClient: QueryClient,
  {
    after,
    before,
    dagId,
    event,
    excludedEvents,
    includedEvents,
    limit,
    mapIndex,
    offset,
    orderBy,
    owner,
    runId,
    taskId,
    tryNumber,
  }: {
    after?: string;
    before?: string;
    dagId?: string;
    event?: string;
    excludedEvents?: string[];
    includedEvents?: string[];
    limit?: number;
    mapIndex?: number;
    offset?: number;
    orderBy?: string;
    owner?: string;
    runId?: string;
    taskId?: string;
    tryNumber?: number;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseEventLogServiceGetEventLogsKeyFn({
      after,
      before,
      dagId,
      event,
      excludedEvents,
      includedEvents,
      limit,
      mapIndex,
      offset,
      orderBy,
      owner,
      runId,
      taskId,
      tryNumber,
    }),
    queryFn: () =>
      EventLogService.getEventLogs({
        after,
        before,
        dagId,
        event,
        excludedEvents,
        includedEvents,
        limit,
        mapIndex,
        offset,
        orderBy,
        owner,
        runId,
        taskId,
        tryNumber,
      }),
  });
/**
 * Get Extra Links
 * Get extra links for task instance.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @param data.mapIndex
 * @returns ExtraLinksResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseExtraLinksServiceGetExtraLinks = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    mapIndex,
    taskId,
  }: {
    dagId: string;
    dagRunId: string;
    mapIndex?: number;
    taskId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseExtraLinksServiceGetExtraLinksKeyFn({ dagId, dagRunId, mapIndex, taskId }),
    queryFn: () => ExtraLinksService.getExtraLinks({ dagId, dagRunId, mapIndex, taskId }),
  });
/**
 * Get Extra Links
 * Get extra links for task instance.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @param data.mapIndex
 * @returns ExtraLinksResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskInstanceServiceGetExtraLinks = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    mapIndex,
    taskId,
  }: {
    dagId: string;
    dagRunId: string;
    mapIndex?: number;
    taskId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskInstanceServiceGetExtraLinksKeyFn({ dagId, dagRunId, mapIndex, taskId }),
    queryFn: () => TaskInstanceService.getExtraLinks({ dagId, dagRunId, mapIndex, taskId }),
  });
/**
 * Get Task Instance
 * Get task instance.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @returns TaskInstanceResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskInstanceServiceGetTaskInstance = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    taskId,
  }: {
    dagId: string;
    dagRunId: string;
    taskId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskInstanceServiceGetTaskInstanceKeyFn({ dagId, dagRunId, taskId }),
    queryFn: () => TaskInstanceService.getTaskInstance({ dagId, dagRunId, taskId }),
  });
/**
 * Get Mapped Task Instances
 * Get list of mapped task instances.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @param data.runAfterGte
 * @param data.runAfterLte
 * @param data.logicalDateGte
 * @param data.logicalDateLte
 * @param data.startDateGte
 * @param data.startDateLte
 * @param data.endDateGte
 * @param data.endDateLte
 * @param data.updatedAtGte
 * @param data.updatedAtLte
 * @param data.durationGte
 * @param data.durationLte
 * @param data.state
 * @param data.pool
 * @param data.queue
 * @param data.executor
 * @param data.versionNumber
 * @param data.limit
 * @param data.offset
 * @param data.orderBy
 * @returns TaskInstanceCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskInstanceServiceGetMappedTaskInstances = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    durationGte,
    durationLte,
    endDateGte,
    endDateLte,
    executor,
    limit,
    logicalDateGte,
    logicalDateLte,
    offset,
    orderBy,
    pool,
    queue,
    runAfterGte,
    runAfterLte,
    startDateGte,
    startDateLte,
    state,
    taskId,
    updatedAtGte,
    updatedAtLte,
    versionNumber,
  }: {
    dagId: string;
    dagRunId: string;
    durationGte?: number;
    durationLte?: number;
    endDateGte?: string;
    endDateLte?: string;
    executor?: string[];
    limit?: number;
    logicalDateGte?: string;
    logicalDateLte?: string;
    offset?: number;
    orderBy?: string;
    pool?: string[];
    queue?: string[];
    runAfterGte?: string;
    runAfterLte?: string;
    startDateGte?: string;
    startDateLte?: string;
    state?: string[];
    taskId: string;
    updatedAtGte?: string;
    updatedAtLte?: string;
    versionNumber?: number[];
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskInstanceServiceGetMappedTaskInstancesKeyFn({
      dagId,
      dagRunId,
      durationGte,
      durationLte,
      endDateGte,
      endDateLte,
      executor,
      limit,
      logicalDateGte,
      logicalDateLte,
      offset,
      orderBy,
      pool,
      queue,
      runAfterGte,
      runAfterLte,
      startDateGte,
      startDateLte,
      state,
      taskId,
      updatedAtGte,
      updatedAtLte,
      versionNumber,
    }),
    queryFn: () =>
      TaskInstanceService.getMappedTaskInstances({
        dagId,
        dagRunId,
        durationGte,
        durationLte,
        endDateGte,
        endDateLte,
        executor,
        limit,
        logicalDateGte,
        logicalDateLte,
        offset,
        orderBy,
        pool,
        queue,
        runAfterGte,
        runAfterLte,
        startDateGte,
        startDateLte,
        state,
        taskId,
        updatedAtGte,
        updatedAtLte,
        versionNumber,
      }),
  });
/**
 * Get Task Instance Dependencies
 * Get dependencies blocking task from getting scheduled.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @param data.mapIndex
 * @returns TaskDependencyCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskInstanceServiceGetTaskInstanceDependencies = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    mapIndex,
    taskId,
  }: {
    dagId: string;
    dagRunId: string;
    mapIndex: number;
    taskId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskInstanceServiceGetTaskInstanceDependenciesKeyFn({
      dagId,
      dagRunId,
      mapIndex,
      taskId,
    }),
    queryFn: () => TaskInstanceService.getTaskInstanceDependencies({ dagId, dagRunId, mapIndex, taskId }),
  });
/**
 * Get Task Instance Dependencies
 * Get dependencies blocking task from getting scheduled.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @param data.mapIndex
 * @returns TaskDependencyCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskInstanceServiceGetTaskInstanceDependencies1 = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    mapIndex,
    taskId,
  }: {
    dagId: string;
    dagRunId: string;
    mapIndex?: number;
    taskId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskInstanceServiceGetTaskInstanceDependencies1KeyFn({
      dagId,
      dagRunId,
      mapIndex,
      taskId,
    }),
    queryFn: () => TaskInstanceService.getTaskInstanceDependencies1({ dagId, dagRunId, mapIndex, taskId }),
  });
/**
 * Get Task Instance Tries
 * Get list of task instances history.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @param data.mapIndex
 * @returns TaskInstanceHistoryCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskInstanceServiceGetTaskInstanceTries = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    mapIndex,
    taskId,
  }: {
    dagId: string;
    dagRunId: string;
    mapIndex?: number;
    taskId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskInstanceServiceGetTaskInstanceTriesKeyFn({ dagId, dagRunId, mapIndex, taskId }),
    queryFn: () => TaskInstanceService.getTaskInstanceTries({ dagId, dagRunId, mapIndex, taskId }),
  });
/**
 * Get Mapped Task Instance Tries
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @param data.mapIndex
 * @returns TaskInstanceHistoryCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskInstanceServiceGetMappedTaskInstanceTries = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    mapIndex,
    taskId,
  }: {
    dagId: string;
    dagRunId: string;
    mapIndex: number;
    taskId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskInstanceServiceGetMappedTaskInstanceTriesKeyFn({
      dagId,
      dagRunId,
      mapIndex,
      taskId,
    }),
    queryFn: () => TaskInstanceService.getMappedTaskInstanceTries({ dagId, dagRunId, mapIndex, taskId }),
  });
/**
 * Get Mapped Task Instance
 * Get task instance.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @param data.mapIndex
 * @returns TaskInstanceResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskInstanceServiceGetMappedTaskInstance = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    mapIndex,
    taskId,
  }: {
    dagId: string;
    dagRunId: string;
    mapIndex: number;
    taskId: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskInstanceServiceGetMappedTaskInstanceKeyFn({ dagId, dagRunId, mapIndex, taskId }),
    queryFn: () => TaskInstanceService.getMappedTaskInstance({ dagId, dagRunId, mapIndex, taskId }),
  });
/**
 * Get Task Instances
 * Get list of task instances.
 *
 * This endpoint allows specifying `~` as the dag_id, dag_run_id to retrieve Task Instances for all DAGs
 * and DAG runs.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @param data.runAfterGte
 * @param data.runAfterLte
 * @param data.logicalDateGte
 * @param data.logicalDateLte
 * @param data.startDateGte
 * @param data.startDateLte
 * @param data.endDateGte
 * @param data.endDateLte
 * @param data.updatedAtGte
 * @param data.updatedAtLte
 * @param data.durationGte
 * @param data.durationLte
 * @param data.taskDisplayNamePattern
 * @param data.state
 * @param data.pool
 * @param data.queue
 * @param data.executor
 * @param data.versionNumber
 * @param data.limit
 * @param data.offset
 * @param data.orderBy
 * @returns TaskInstanceCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskInstanceServiceGetTaskInstances = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    durationGte,
    durationLte,
    endDateGte,
    endDateLte,
    executor,
    limit,
    logicalDateGte,
    logicalDateLte,
    offset,
    orderBy,
    pool,
    queue,
    runAfterGte,
    runAfterLte,
    startDateGte,
    startDateLte,
    state,
    taskDisplayNamePattern,
    taskId,
    updatedAtGte,
    updatedAtLte,
    versionNumber,
  }: {
    dagId: string;
    dagRunId: string;
    durationGte?: number;
    durationLte?: number;
    endDateGte?: string;
    endDateLte?: string;
    executor?: string[];
    limit?: number;
    logicalDateGte?: string;
    logicalDateLte?: string;
    offset?: number;
    orderBy?: string;
    pool?: string[];
    queue?: string[];
    runAfterGte?: string;
    runAfterLte?: string;
    startDateGte?: string;
    startDateLte?: string;
    state?: string[];
    taskDisplayNamePattern?: string;
    taskId?: string;
    updatedAtGte?: string;
    updatedAtLte?: string;
    versionNumber?: number[];
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskInstanceServiceGetTaskInstancesKeyFn({
      dagId,
      dagRunId,
      durationGte,
      durationLte,
      endDateGte,
      endDateLte,
      executor,
      limit,
      logicalDateGte,
      logicalDateLte,
      offset,
      orderBy,
      pool,
      queue,
      runAfterGte,
      runAfterLte,
      startDateGte,
      startDateLte,
      state,
      taskDisplayNamePattern,
      taskId,
      updatedAtGte,
      updatedAtLte,
      versionNumber,
    }),
    queryFn: () =>
      TaskInstanceService.getTaskInstances({
        dagId,
        dagRunId,
        durationGte,
        durationLte,
        endDateGte,
        endDateLte,
        executor,
        limit,
        logicalDateGte,
        logicalDateLte,
        offset,
        orderBy,
        pool,
        queue,
        runAfterGte,
        runAfterLte,
        startDateGte,
        startDateLte,
        state,
        taskDisplayNamePattern,
        taskId,
        updatedAtGte,
        updatedAtLte,
        versionNumber,
      }),
  });
/**
 * Get Task Instance Try Details
 * Get task instance details by try number.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @param data.taskTryNumber
 * @param data.mapIndex
 * @returns TaskInstanceHistoryResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskInstanceServiceGetTaskInstanceTryDetails = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    mapIndex,
    taskId,
    taskTryNumber,
  }: {
    dagId: string;
    dagRunId: string;
    mapIndex?: number;
    taskId: string;
    taskTryNumber: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskInstanceServiceGetTaskInstanceTryDetailsKeyFn({
      dagId,
      dagRunId,
      mapIndex,
      taskId,
      taskTryNumber,
    }),
    queryFn: () =>
      TaskInstanceService.getTaskInstanceTryDetails({ dagId, dagRunId, mapIndex, taskId, taskTryNumber }),
  });
/**
 * Get Mapped Task Instance Try Details
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @param data.taskTryNumber
 * @param data.mapIndex
 * @returns TaskInstanceHistoryResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskInstanceServiceGetMappedTaskInstanceTryDetails = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    mapIndex,
    taskId,
    taskTryNumber,
  }: {
    dagId: string;
    dagRunId: string;
    mapIndex: number;
    taskId: string;
    taskTryNumber: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskInstanceServiceGetMappedTaskInstanceTryDetailsKeyFn({
      dagId,
      dagRunId,
      mapIndex,
      taskId,
      taskTryNumber,
    }),
    queryFn: () =>
      TaskInstanceService.getMappedTaskInstanceTryDetails({
        dagId,
        dagRunId,
        mapIndex,
        taskId,
        taskTryNumber,
      }),
  });
/**
 * Get Log
 * Get logs for a specific task instance.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @param data.tryNumber
 * @param data.fullContent
 * @param data.mapIndex
 * @param data.token
 * @param data.accept
 * @returns TaskInstancesLogResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskInstanceServiceGetLog = (
  queryClient: QueryClient,
  {
    accept,
    dagId,
    dagRunId,
    fullContent,
    mapIndex,
    taskId,
    token,
    tryNumber,
  }: {
    accept?: "application/json" | "text/plain" | "*/*";
    dagId: string;
    dagRunId: string;
    fullContent?: boolean;
    mapIndex?: number;
    taskId: string;
    token?: string;
    tryNumber: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskInstanceServiceGetLogKeyFn({
      accept,
      dagId,
      dagRunId,
      fullContent,
      mapIndex,
      taskId,
      token,
      tryNumber,
    }),
    queryFn: () =>
      TaskInstanceService.getLog({
        accept,
        dagId,
        dagRunId,
        fullContent,
        mapIndex,
        taskId,
        token,
        tryNumber,
      }),
  });
/**
 * Get Import Error
 * Get an import error.
 * @param data The data for the request.
 * @param data.importErrorId
 * @returns ImportErrorResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseImportErrorServiceGetImportError = (
  queryClient: QueryClient,
  {
    importErrorId,
  }: {
    importErrorId: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseImportErrorServiceGetImportErrorKeyFn({ importErrorId }),
    queryFn: () => ImportErrorService.getImportError({ importErrorId }),
  });
/**
 * Get Import Errors
 * Get all import errors.
 * @param data The data for the request.
 * @param data.limit
 * @param data.offset
 * @param data.orderBy
 * @returns ImportErrorCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseImportErrorServiceGetImportErrors = (
  queryClient: QueryClient,
  {
    limit,
    offset,
    orderBy,
  }: {
    limit?: number;
    offset?: number;
    orderBy?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseImportErrorServiceGetImportErrorsKeyFn({ limit, offset, orderBy }),
    queryFn: () => ImportErrorService.getImportErrors({ limit, offset, orderBy }),
  });
/**
 * Get Jobs
 * Get all jobs.
 * @param data The data for the request.
 * @param data.isAlive
 * @param data.startDateGte
 * @param data.startDateLte
 * @param data.endDateGte
 * @param data.endDateLte
 * @param data.limit
 * @param data.offset
 * @param data.orderBy
 * @param data.jobState
 * @param data.jobType
 * @param data.hostname
 * @param data.executorClass
 * @returns JobCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseJobServiceGetJobs = (
  queryClient: QueryClient,
  {
    endDateGte,
    endDateLte,
    executorClass,
    hostname,
    isAlive,
    jobState,
    jobType,
    limit,
    offset,
    orderBy,
    startDateGte,
    startDateLte,
  }: {
    endDateGte?: string;
    endDateLte?: string;
    executorClass?: string;
    hostname?: string;
    isAlive?: boolean;
    jobState?: string;
    jobType?: string;
    limit?: number;
    offset?: number;
    orderBy?: string;
    startDateGte?: string;
    startDateLte?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseJobServiceGetJobsKeyFn({
      endDateGte,
      endDateLte,
      executorClass,
      hostname,
      isAlive,
      jobState,
      jobType,
      limit,
      offset,
      orderBy,
      startDateGte,
      startDateLte,
    }),
    queryFn: () =>
      JobService.getJobs({
        endDateGte,
        endDateLte,
        executorClass,
        hostname,
        isAlive,
        jobState,
        jobType,
        limit,
        offset,
        orderBy,
        startDateGte,
        startDateLte,
      }),
  });
/**
 * Get Plugins
 * @param data The data for the request.
 * @param data.limit
 * @param data.offset
 * @returns PluginCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUsePluginServiceGetPlugins = (
  queryClient: QueryClient,
  {
    limit,
    offset,
  }: {
    limit?: number;
    offset?: number;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UsePluginServiceGetPluginsKeyFn({ limit, offset }),
    queryFn: () => PluginService.getPlugins({ limit, offset }),
  });
/**
 * Get Pool
 * Get a pool.
 * @param data The data for the request.
 * @param data.poolName
 * @returns PoolResponse Successful Response
 * @throws ApiError
 */
export const prefetchUsePoolServiceGetPool = (
  queryClient: QueryClient,
  {
    poolName,
  }: {
    poolName: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UsePoolServiceGetPoolKeyFn({ poolName }),
    queryFn: () => PoolService.getPool({ poolName }),
  });
/**
 * Get Pools
 * Get all pools entries.
 * @param data The data for the request.
 * @param data.limit
 * @param data.offset
 * @param data.orderBy
 * @param data.poolNamePattern
 * @returns PoolCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUsePoolServiceGetPools = (
  queryClient: QueryClient,
  {
    limit,
    offset,
    orderBy,
    poolNamePattern,
  }: {
    limit?: number;
    offset?: number;
    orderBy?: string;
    poolNamePattern?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UsePoolServiceGetPoolsKeyFn({ limit, offset, orderBy, poolNamePattern }),
    queryFn: () => PoolService.getPools({ limit, offset, orderBy, poolNamePattern }),
  });
/**
 * Get Providers
 * Get providers.
 * @param data The data for the request.
 * @param data.limit
 * @param data.offset
 * @returns ProviderCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseProviderServiceGetProviders = (
  queryClient: QueryClient,
  {
    limit,
    offset,
  }: {
    limit?: number;
    offset?: number;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseProviderServiceGetProvidersKeyFn({ limit, offset }),
    queryFn: () => ProviderService.getProviders({ limit, offset }),
  });
/**
 * Get Xcom Entry
 * Get an XCom entry.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.taskId
 * @param data.dagRunId
 * @param data.xcomKey
 * @param data.mapIndex
 * @param data.deserialize
 * @param data.stringify
 * @returns unknown Successful Response
 * @throws ApiError
 */
export const prefetchUseXcomServiceGetXcomEntry = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    deserialize,
    mapIndex,
    stringify,
    taskId,
    xcomKey,
  }: {
    dagId: string;
    dagRunId: string;
    deserialize?: boolean;
    mapIndex?: number;
    stringify?: boolean;
    taskId: string;
    xcomKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseXcomServiceGetXcomEntryKeyFn({
      dagId,
      dagRunId,
      deserialize,
      mapIndex,
      stringify,
      taskId,
      xcomKey,
    }),
    queryFn: () =>
      XcomService.getXcomEntry({ dagId, dagRunId, deserialize, mapIndex, stringify, taskId, xcomKey }),
  });
/**
 * Get Xcom Entries
 * Get all XCom entries.
 *
 * This endpoint allows specifying `~` as the dag_id, dag_run_id, task_id to retrieve XCom entries for all DAGs.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.dagRunId
 * @param data.taskId
 * @param data.xcomKey
 * @param data.mapIndex
 * @param data.limit
 * @param data.offset
 * @returns XComCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseXcomServiceGetXcomEntries = (
  queryClient: QueryClient,
  {
    dagId,
    dagRunId,
    limit,
    mapIndex,
    offset,
    taskId,
    xcomKey,
  }: {
    dagId: string;
    dagRunId: string;
    limit?: number;
    mapIndex?: number;
    offset?: number;
    taskId: string;
    xcomKey?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseXcomServiceGetXcomEntriesKeyFn({
      dagId,
      dagRunId,
      limit,
      mapIndex,
      offset,
      taskId,
      xcomKey,
    }),
    queryFn: () => XcomService.getXcomEntries({ dagId, dagRunId, limit, mapIndex, offset, taskId, xcomKey }),
  });
/**
 * Get Tasks
 * Get tasks for DAG.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.orderBy
 * @returns TaskCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskServiceGetTasks = (
  queryClient: QueryClient,
  {
    dagId,
    orderBy,
  }: {
    dagId: string;
    orderBy?: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskServiceGetTasksKeyFn({ dagId, orderBy }),
    queryFn: () => TaskService.getTasks({ dagId, orderBy }),
  });
/**
 * Get Task
 * Get simplified representation of a task.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.taskId
 * @returns TaskResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseTaskServiceGetTask = (
  queryClient: QueryClient,
  {
    dagId,
    taskId,
  }: {
    dagId: string;
    taskId: unknown;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTaskServiceGetTaskKeyFn({ dagId, taskId }),
    queryFn: () => TaskService.getTask({ dagId, taskId }),
  });
/**
 * Get Variable
 * Get a variable entry.
 * @param data The data for the request.
 * @param data.variableKey
 * @returns VariableResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseVariableServiceGetVariable = (
  queryClient: QueryClient,
  {
    variableKey,
  }: {
    variableKey: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseVariableServiceGetVariableKeyFn({ variableKey }),
    queryFn: () => VariableService.getVariable({ variableKey }),
  });
/**
 * Get Variables
 * Get all Variables entries.
 * @param data The data for the request.
 * @param data.limit
 * @param data.offset
 * @param data.orderBy
 * @param data.variableKeyPattern
 * @returns VariableCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseVariableServiceGetVariables = (
  queryClient: QueryClient,
  {
    limit,
    offset,
    orderBy,
    variableKeyPattern,
  }: {
    limit?: number;
    offset?: number;
    orderBy?: string;
    variableKeyPattern?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseVariableServiceGetVariablesKeyFn({ limit, offset, orderBy, variableKeyPattern }),
    queryFn: () => VariableService.getVariables({ limit, offset, orderBy, variableKeyPattern }),
  });
/**
 * Get Dag Version
 * Get one Dag Version.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.versionNumber
 * @returns DagVersionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDagVersionServiceGetDagVersion = (
  queryClient: QueryClient,
  {
    dagId,
    versionNumber,
  }: {
    dagId: string;
    versionNumber: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagVersionServiceGetDagVersionKeyFn({ dagId, versionNumber }),
    queryFn: () => DagVersionService.getDagVersion({ dagId, versionNumber }),
  });
/**
 * Get Dag Versions
 * Get all DAG Versions.
 *
 * This endpoint allows specifying `~` as the dag_id to retrieve DAG Versions for all DAGs.
 * @param data The data for the request.
 * @param data.dagId
 * @param data.limit
 * @param data.offset
 * @param data.versionNumber
 * @param data.bundleName
 * @param data.bundleVersion
 * @param data.orderBy
 * @returns DAGVersionCollectionResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseDagVersionServiceGetDagVersions = (
  queryClient: QueryClient,
  {
    bundleName,
    bundleVersion,
    dagId,
    limit,
    offset,
    orderBy,
    versionNumber,
  }: {
    bundleName?: string;
    bundleVersion?: string;
    dagId: string;
    limit?: number;
    offset?: number;
    orderBy?: string;
    versionNumber?: number;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDagVersionServiceGetDagVersionsKeyFn({
      bundleName,
      bundleVersion,
      dagId,
      limit,
      offset,
      orderBy,
      versionNumber,
    }),
    queryFn: () =>
      DagVersionService.getDagVersions({
        bundleName,
        bundleVersion,
        dagId,
        limit,
        offset,
        orderBy,
        versionNumber,
      }),
  });
/**
 * Get Health
 * @returns HealthInfoResponse Successful Response
 * @throws ApiError
 */
export const prefetchUseMonitorServiceGetHealth = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMonitorServiceGetHealthKeyFn(),
    queryFn: () => MonitorService.getHealth(),
  });
/**
 * Get Version
 * Get version information.
 * @returns VersionInfo Successful Response
 * @throws ApiError
 */
export const prefetchUseVersionServiceGetVersion = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseVersionServiceGetVersionKeyFn(),
    queryFn: () => VersionService.getVersion(),
  });
/**
 * Login
 * Redirect to the login URL depending on the AuthManager configured.
 * @param data The data for the request.
 * @param data.next
 * @returns unknown Successful Response
 * @throws ApiError
 */
export const prefetchUseLoginServiceLogin = (
  queryClient: QueryClient,
  {
    next,
  }: {
    next?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseLoginServiceLoginKeyFn({ next }),
    queryFn: () => LoginService.login({ next }),
  });
/**
 * Logout
 * Logout the user.
 * @param data The data for the request.
 * @param data.next
 * @returns unknown Successful Response
 * @throws ApiError
 */
export const prefetchUseLoginServiceLogout = (
  queryClient: QueryClient,
  {
    next,
  }: {
    next?: string;
  } = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseLoginServiceLogoutKeyFn({ next }),
    queryFn: () => LoginService.logout({ next }),
  });
/**
 * Not Found Handler
 * Catch all route to handle invalid endpoints.
 * @param data The data for the request.
 * @param data.restOfPath
 * @returns unknown Successful Response
 * @throws ApiError
 */
export const prefetchUseDefaultServiceNotFoundHandler = (
  queryClient: QueryClient,
  {
    restOfPath,
  }: {
    restOfPath: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDefaultServiceNotFoundHandlerKeyFn({ restOfPath }),
    queryFn: () => DefaultService.notFoundHandler({ restOfPath }),
  });
