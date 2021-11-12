// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import acima10reais from './acima-10-reais.json';

export default (req, res) => {
  res.status(200).json(acima10reais)
}
