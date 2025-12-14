type payment = {
    card: {
        name: string
        number: string
        code: string
        expires: {
            month: string,
            year: string
        }
    }
}

type delivery = {
    receiver: string
    adress: {
        description: string
        city: string
        zipCode: string
        number: string
        complement: string
    }
}

export interface Order {
    products: number[][]
    delivery: delivery
    payment: payment
}