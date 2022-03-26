import { User } from 'src/user/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  Entity,
  ManyToOne,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Actualite extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
  createdAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({ name: 'nom', type: 'varchar', length: 150 })
  nom: string;

  @ManyToOne(() => User, (user) => user.actualites)
  user: User;
}
