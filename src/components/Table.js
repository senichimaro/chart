import axios from 'axios'
import cheerio from 'cheerio'
import request from 'request'
// import request from 'async-request'
// import { useDataSource } from "../customHooks/useDataSource"

// components
import { ListRow } from'./ListRow'

// data from config
import { config } from '../data/config'

const apiCall = resourceUrl => async () => {
    // const response = await request(resourceUrl)
    // return response
    request('https://www.promiedos.com.ar/historiales', (err,resr,body)=>{})
}

export const Table = () => {
    // const response = useDataSource(apiCall(config.ukrinform))
    // console.log("response", response)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    )
}