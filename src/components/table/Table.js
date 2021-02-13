import {ExcelComponent} from 'core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {mouseListeners} from '@/components/table/table.listeners'
import {shouldResize} from '@/components/table/table.functions'

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            name: 'table',
            listeners: ['mousedown']
        })
    }

    toHTML() {
        return createTable()
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            mouseListeners(this.$root, event)
        }
    }
}
