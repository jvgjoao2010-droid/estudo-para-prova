import { Pool } from '../db.js';

class maquiagemService {

    async listarTodos() {
        const resultado = await pool.query(
            'select * from celulares'

        );
        return resultado.rows;


    }

    async cadastrar(id, marca, preco) {
        const resultado = await pool.query(`insert into make(marca, preco)VALUES ($1, $2)returning *`, [id, marca, preco]);
        return resultado.rows[0];



    }
}
export const celularesService = new celularService