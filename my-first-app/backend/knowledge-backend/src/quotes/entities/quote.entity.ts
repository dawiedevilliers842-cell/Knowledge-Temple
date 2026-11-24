import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quote {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slug: string;

    @Column()
    quote: string;

    @Column()
    author: string;

    @Column('text', { array: true, default: [] })
    tags: string[];

    @Column()
    word_count: number;

    @Column()
    char_count: number;

    @Column()
    length: string;
}