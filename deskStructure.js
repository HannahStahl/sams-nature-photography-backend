import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Galleries')
        .child(S.documentTypeList('gallery').title('Galleries')),
      S.listItem()
        .title('About')
        .child(S.editor().schemaType('about').documentId('about')),
    ]);