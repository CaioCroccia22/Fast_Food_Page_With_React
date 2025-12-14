import * as Yup from 'yup';

export const paymentValidationSchema = Yup.object({
  delivery: Yup.object({
    receiver: Yup.string()
      .required('Nome do destinatário é obrigatório')
      .min(3, 'Nome deve ter no mínimo 3 caracteres'),
    adress: Yup.object({
      description: Yup.string()
        .required('Endereço é obrigatório'),
      city: Yup.string()
        .required('Cidade é obrigatória'),
      zipCode: Yup.string()
        .required('CEP é obrigatório')
        .matches(/^\d{5}-?\d{3}$/, 'CEP inválido'),
      number: Yup.number()
        .required('Número é obrigatório')
        .positive('Número deve ser positivo'),
      complement: Yup.string()
    })
  }),
  payment: Yup.object({
    card: Yup.object({
      name: Yup.string()
        .required('Nome do cartão é obrigatório')
        .min(3, 'Nome deve ter no mínimo 3 caracteres'),
      number: Yup.string()
        .required('Número do cartão é obrigatório')
        .matches(/^\d{16}$/, 'Número do cartão deve ter 16 dígitos'),
      code: Yup.number()
        .required('CVV é obrigatório')
        .min(100, 'CVV deve ter 3 ou 4 dígitos')
        .max(9999, 'CVV deve ter 3 ou 4 dígitos'),
      expires: Yup.object({
        month: Yup.number()
          .required('Mês é obrigatório')
          .min(1, 'Mês inválido')
          .max(12, 'Mês inválido'),
        year: Yup.number()
          .required('Ano é obrigatório')
          .min(new Date().getFullYear(), 'Cartão vencido')
      })
    })
  })
});