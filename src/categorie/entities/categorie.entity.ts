import { User } from 'src/user/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  Entity,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Categorie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: Date,
    default: () => new Date(),
  })
  @Column({ name: 'nom', type: 'varchar', length: 150 })
  nom: string;

  @ManyToOne(() => User, (user) => user.categories)
  user: User;
}
