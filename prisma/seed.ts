import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.propmt.deleteMany()
  await prisma.propmt.create({
    data: {
      title: 'Youtube Title',
      template: `Seu papel è gerar tres titulos para um video do Youtube.
Abaixo voce recebera uma transcricao desse video, use essa transcricao para gerar os titulos.
Abaixo voce tambem recebera uma lista de titulos, use essa lista como referencia para os titulos a serem gerados.
            
Os Titulos devem ter no maximo 68 caracteres.
Os Titulos devem ser criativos e chamar a atencao do usuario.

Retorne APENAS os tres titulos em formato de lista como no exemplo abaixo:
'''
- Titulo 2
- Titulo 1
- Titulo 3
'''

Transcricao:
'''
{transcription}
'''`.trim(),
    },
  })
  await prisma.propmt.create({
    data: {
      title: 'Youtube Description',
      template: `Seu papel è gerar uma descricao para um video do Youtube.
Abaixo voce recebera uma transcricao desse video, use essa transcricao para gerar a descricao.

A descricao deve possuir no maximo 80 palavras em primeira pessoa contendo os pontos principais do video.

Use palavras chamativas e que chamem a atencao do usuario.

Alem disso, no final da descricao inclua uma lista de 3 ate 10 hastags em letra minuscula relacionadas ao video.

o retorno deve seguir o seguinte formato:

'''
Description:
#hashtag1 #hashtag2 #hashtag3
'''

Transcription:
'''
{transcription}
'''`.trim(),
    },
  })
}
main()
