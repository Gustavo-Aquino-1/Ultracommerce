const resp = (s: number, m: unknown) => ({ status: s, message: m })
const respM = (s: number, m: unknown) => resp(s, { message : m })


export { resp, respM }