import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({})
  email: string;

  @Column()
  password: string;
}
