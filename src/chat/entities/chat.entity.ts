import { User } from 'src/user/entities/user.entity';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Chat extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
  createdAt: Date;

  @Column({ name: 'description', type: 'varchar', length: 255 })
  description: string;

  @ManyToMany(() => User, (user) => user.chats, {
    cascade: true,
  })
  @JoinTable()
  users: User[];
}
