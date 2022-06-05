import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Category } from "./Category";

@Entity("videos")
export class Video {

  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Category) //saber que é a referencia
  @JoinColumn({ name: "category_id" })
  category: Category;

  @Column()
  category_id: string; //auxiliar 

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @CreateDateColumn({
    name: "created_at"
  })
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }

}