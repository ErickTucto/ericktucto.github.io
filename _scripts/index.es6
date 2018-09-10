import '../_sass/libs/stix-grid/es6/main.es6'
import $ from 'jquery'
import ClipboardJS from 'clipboard/dist/clipboard'
$(document).ready((e) => {
    $('.embed-container iframe').each((i, frame) => {
        let attr = $(frame).attr('src');
        attr = `${attr}?showinfo=0`;
        $(frame).attr('src', attr);
    });
    $('figure.highlight > pre').each((i, el) => {
        let pre = $(el);
        pre.css('position', 'relative');
        pre.append(
            $("<button></button>")
                .addClass('btn')
                .addClass('btn-copy')
                .text("Copiar")
        );
        let text = pre.find('.code pre').text();
        let btn = pre.find('.btn-copy').get(0);
        var clipboard = new ClipboardJS(btn, {
            text: () => {
                return text;
            }
        });
        clipboard.on('success', (e) => {
            $(e.trigger).text("¡Copiado!");
            setTimeout(() => {
                $(e.trigger).text("Copiar");
            }, 1000)
        })
    });
});