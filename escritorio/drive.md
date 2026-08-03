# Pastas do Drive

<!--
FORMATO: uma linha por pasta. `id` é o que vai em `parentId` nas chamadas do
conector do Google Drive; `link` é para humano abrir no navegador.
- Este arquivo é a FONTE DA VERDADE de onde cada agente guarda arquivo.
- Cada agente escreve na PRÓPRIA pasta. Para ler a de outro, pode — para
  escrever na de outro, pergunte ao dono antes.
- O id sai da URL da pasta: drive.google.com/drive/folders/<ID>. Renomear a
  pasta no Drive NÃO muda o id, então renomeie à vontade; mover também não.
- PEGADINHA: `parentId = '<id>'` acha só filho DIRETO, não é recursivo. Toda
  subpasta nova que os agentes precisem buscar entra aqui com o id dela.
-->

| pasta | dono | id | link |
| --- | --- | --- | --- |
| Escritório (raiz) | todos | `118ZjAFXcsEugFYBVZJJvQRv5l7_Fs7qy` | https://drive.google.com/drive/folders/118ZjAFXcsEugFYBVZJJvQRv5l7_Fs7qy |
| Escritório/Caio | Caio | `1XWDqCwd2sPOadHt4k2R4-VKJl8vN19Cm` | https://drive.google.com/drive/folders/1XWDqCwd2sPOadHt4k2R4-VKJl8vN19Cm |
| Escritório/Lina | Lina | `18t_tTcpkdZnJuL5EBoCdw6AZWAjHfUYf` | https://drive.google.com/drive/folders/18t_tTcpkdZnJuL5EBoCdw6AZWAjHfUYf |
| Escritório/Ren | Ren | `1oiDc79-7bx0zsF4r6r9BTWGBlsk_3TEs` | https://drive.google.com/drive/folders/1oiDc79-7bx0zsF4r6r9BTWGBlsk_3TEs |
| Escritório/Vega | Vega | `1BHsRg-DDPhKVB94ncerQYCM0vJ6atpe_` | https://drive.google.com/drive/folders/1BHsRg-DDPhKVB94ncerQYCM0vJ6atpe_ |
| Escritório/Nico | Nico | `1-VxoqYIWyLejiOgNheKtqkpU9N7dJg1x` | https://drive.google.com/drive/folders/1-VxoqYIWyLejiOgNheKtqkpU9N7dJg1x |

## Como usar

Buscar só dentro da própria pasta:

```
search_files  query: "parentId = '<id da pasta>' and title contains 'ementa'"
```

Criar arquivo dentro dela:

```
create_file  title: "..."  parentId: "<id da pasta>"  textContent: "..."
```

Sem o `parentId` a busca varre o Drive inteiro e o arquivo novo cai solto na
raiz do Drive — que é justamente o que estas pastas existem para evitar.
