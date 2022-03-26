import { Item } from 'src/item/entities/item.entity';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinTable,
  ManyToMany,
  BaseEntity,
  Entity,
} from 'typeorm';

@Entity()
export class Panier extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
  createdAt: Date;
  @ManyToMany(() => Item)
  @JoinTable()
  items: Item[];
}
