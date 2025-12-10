type payment = {
    card: {
        name: string
        number: string
        code: number
        expires: {
            month: number,
            year: number
        }
    }
}

type delivery = {
    receiver: string
    adress: {
        description: string
        city: string
        zipCode: string
        number: number
        complement: string
    }
}

export interface Order {
    products: number[][]
    delivery: delivery
    payment: payment
}