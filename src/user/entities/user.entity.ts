import { Panier } from './../../panier/entities/panier.entity';
import { Categorie } from './../../categorie/entities/categorie.entity';
import { Actualite } from './../../actualite/entities/actualite.entity';
import { Chat } from './../../chat/entities/chat.entity';
import { Item } from 'src/item/entities/item.entity';
import { Photo } from 'src/photo/entities/photo.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToOne,
} from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
  ANONYME = 'anonyme',
  FOURNISSEUR = 'fournisseur',
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: Date,
    default: () => new Date(),
  })
  createdAt: Date;
  @UpdateDateColumn({
    name: 'updated_at',
    type: Date,
    default: () => new Date(),
  })
  updatedAt: Date;

  @Column({ name: 'username', unique: true, type: 'varchar', length: 150 })
  username: string;

  @Column({ name: 'nom', type: 'varchar', length: 150 })
  nom: string;

  @Column({ name: 'prenom', type: 'varchar', length: 150 })
  prenom: string;

  @Column({ name: 'password', type: 'varchar', length: 150 })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  photo: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.ANONYME,
  })
  role: UserRole;

  @OneToMany(() => Item, (item) => item.user)
  items: Item[];

  @OneToMany(() => Categorie, (categorie) => categorie.user)
  categories: Categorie[];

  @OneToMany(() => Actualite, (actualite) => actualite.user)
  actualites: Actualite[];

  @ManyToMany(() => Chat, (chat) => chat.users, {
    cascade: true,
  })
  @JoinTable()
  chats: Chat[];

  @OneToOne(() => Panier)
  @JoinColumn()
  panier: Panier;
}
