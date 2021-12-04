import { Item } from 'src/item/entities/item.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Item, (item) => item.photos)
  item: Item;
}
