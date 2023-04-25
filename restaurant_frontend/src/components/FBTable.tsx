import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
    Divider,
} from '@chakra-ui/react'


// TODO: Type Correction
// interface tableData {
//     headings: string,
// }

// interface FBTable {
//     tableData: tableData{ };}

const FBTable = ({ tableData, size, tdHeight, maxData, ...rest }: any) => {
    const { header, rows } = tableData;
    return (
        <>
            <TableContainer {...rest} >
                <Table size={size} sx={{ "td": { height: tdHeight } }}>
                    <Thead bgColor={'#E8EBF780'} fontWeight={600} fontSize="xl">
                        <Tr>
                            {header.map((heading: string) => (
                                <Th key={heading}>{heading}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody >
                        {rows.slice(0, maxData).map((rowData: string[], index: number) => (
                            <>
                                <tr key={index}>
                                    {rowData.map((cellData: string, index: number) => (
                                        <>
                                            <td key={index}>
                                                {<Divider />}<Text px="4" py="2" fontSize="sm" >{cellData}</Text></td>
                                        </>
                                    ))}
                                </tr>
                            </>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer></>
    )
}

export default FBTable