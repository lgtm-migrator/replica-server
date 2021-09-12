import { Replica, ReplicaMetadata, ReplicaWithFiles } from '../models/replica';
import { BaseReplicaFilter, PublicReplicaFilter, PrivateReplicaFilter } from '../models/replicaFilter';

export const REPLICA_REPOSITORY_SYMBOL = Symbol('ReplicaRepository');

export interface IReplicaRepository {
  findOneReplica: (replicaId: string) => Promise<Replica | undefined>;
  findOneReplicaWithFiles: (replicaId: string) => Promise<ReplicaWithFiles | undefined>;
  findReplicas: (findOptions: PublicReplicaFilter) => Promise<ReplicaWithFiles[]>;
  findLatestReplicaWithFiles: (findOptions: BaseReplicaFilter) => Promise<ReplicaWithFiles | undefined>;
  createReplica: (replica: Replica) => Promise<void>;
  updateReplicas: (findOptions: PrivateReplicaFilter, updatedMetadata: ReplicaMetadata) => Promise<void>;
  deleteReplicas: (findOptions: PrivateReplicaFilter) => Promise<ReplicaWithFiles[]>;
}
