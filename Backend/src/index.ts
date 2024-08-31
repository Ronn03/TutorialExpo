import * as dotenv from 'dotenv';
import express, { response } from "express";
import cors from "cors"


dotenv.config()
const app = express()
app.use(express.json())
const PORT = 9004
app.use(cors())

import { OpenAIApi, Configuration } from 'openai'
import * as path from "path";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

const generatePrompt = (clasificador: Text) => {
  return `
  
  el texto: (${clasificador})  se compone de un numero seguido de un texto?
   Si la respuesta es si, dime el numero transformado a binario y el conteo total de vocales.
  Caso contrario dime incorrecto.
  Ejemplo: (2 Hola mundo) Respuesta: 10, vocales 4 

  `;
}

app.post('/openapi2', async (req, res) => {
  const { prompt } = req.body
  const completion = await openai.createCompletion({

      // Con el gpt 3.5 no da respuestas se recomienda probar con gpt4 
      model: 'gpt-3.5-turbo-instruct',
      
       prompt: generatePrompt(prompt),
      temperature: 0.5
  })

  // @ts-ignore
  res.send({ result: completion.data.choices[0].text.trim()})
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Running application at http://localhost:${PORT}`);
});
