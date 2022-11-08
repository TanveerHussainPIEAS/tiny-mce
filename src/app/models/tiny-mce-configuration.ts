export class TinyMCEConfiguration {
    static apiKey: string = 'rkbcoueifq6g75nrpvyebv0w0eqttonwykk49i641f5md4t7';
    static settings = {
      height: 500,
      menubar: true,
      branding: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
      ],
      toolbar:
        ' undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              pagebreak nonbreaking anchor toc | \
              bullist numlist outdent indent | image | removeformat',
      
    };
  }
  