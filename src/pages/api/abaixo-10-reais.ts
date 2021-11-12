// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import abaixo10reais from './abaixo-10-reais.json';

export default (req, res) => {
  res.status(200).json(abaixo10reais)
}
