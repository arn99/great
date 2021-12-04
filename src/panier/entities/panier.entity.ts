import { Item } from 'src/item/entities/item.entity';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';

export class Panier {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: Date,
    default: () => new Date(),
  })
  createdAt: Date;
  @ManyToMany(() => Item)
  @JoinTable()
  items: Item[];
}
