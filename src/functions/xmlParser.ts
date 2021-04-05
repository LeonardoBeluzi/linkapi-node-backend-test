import { j2xParser } from 'fast-xml-parser'

export default {
    piledriveDataToXML(data: any) {
        const itemObject = {
            item: {
                codigo: 'teste',
                descricao: 'Produto Teste',
                qtde: data.products_count,
                vlr_unit: data.value / data.products_count
            }
        }

        const xmlObject = {
            pedido: {
                cliente: {
                    nome: data.person_id.name
                },
                data: data.add_time,
                numero: data.id,
                numero_loja: data.id,
                itens: [itemObject]
            }
        }

        var defaultOptions = {
            attributeNamePrefix: "@_",
            attrNodeName: "@",
            textNodeName: "#text",
            ignoreAttributes: true,
            cdataTagName: "__cdata",
            cdataPositionChar: "\\c",
            format: false,
            indentBy: "  ",
            supressEmptyNode: false
        }

        var parser = new j2xParser(defaultOptions)
        return parser.parse(xmlObject)
    }
}