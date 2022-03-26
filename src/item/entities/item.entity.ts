import { User } from 'src/user/entities/user.entity';
import { Photo } from 'src/photo/entities/photo.entity';
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Categorie } from 'src/categorie/entities/categorie.entity';

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({ name: 'nom', type: 'varchar', length: 150 })
  nom: string;

  @OneToMany(() => Photo, (photo) => photo.item)
  photos: Photo[];

  @ManyToOne(() => User, (user) => user.items)
  user: User;

  @ManyToMany(() => Categorie)
  @JoinTable()
  categories: Categorie[];
}
