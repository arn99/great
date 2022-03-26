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
export class Categorie extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
  @Column({ name: 'nom', type: 'varchar', length: 150 })
  nom: string;

  @ManyToOne(() => User, (user) => user.categories)
  user: User;
}
