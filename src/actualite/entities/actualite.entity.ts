import { User } from 'src/user/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  Entity,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Actualite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: Date,
    default: () => new Date(),
  })
  createdAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({ name: 'nom', type: 'varchar', length: 150 })
  nom: string;

  @ManyToOne(() => User, (user) => user.actualites)
  user: User;
}
