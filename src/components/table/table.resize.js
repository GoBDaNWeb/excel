import {$} from 'core/Dom';

export function resizeHandler($root, event) {
    console.log(event)
    const $resizer = $(event.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const type = $resizer.data.resize
    const cells = $root.findAll(`[data-col="${$parent.data.col}"]`)
    let value
    $resizer.css({
        opacity: 1,
    })
    document.onmousemove = e => {
        if (type === 'column') {
            const delta = e.pageX - coords.right
            value = coords.width + delta
            $resizer.css({
                right: -delta + 'px',
                bottom: '-5000px'
            })
        } else {
            const delta = e.pageY - coords.bottom
            value = coords.height + delta
            $resizer.css({
                bottom: -delta + 'px',
                right: '-5000px'
            })
        }
    }
    document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
        if (type === 'column') {
            cells.forEach(cell => {
                cell.style.width = value + 'px'
            })
            $parent.css({
                width: value + 'px'
            })
        } else {
            $parent.css({
                height: value + 'px'
            })
        }
        $resizer.css({
            opacity: 0,
            bottom: 0,
            right: 0
        })
    }
}