import {ExcelComponent} from 'core/ExcelComponent';
import {$} from 'core/Dom'

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            subscribe: ['currentText'],
            ...options
        })
    }

    toHTML() {
        return `
            <div class="formula-info">
                    Fx
            </div>
            <div 
            id="formula"
             class="formula-input"
              contenteditable
               spellcheck="false">

            </div>
        `
    }

    init() {
        super.init()

        this.$formula = this.$root.find('#formula')
        this.$on('table:select', $cell => {
            this.$formula.text($cell.text())
        })

        this.$on(state => {
            console.log('Formula update', state.currentText)
            this.$formula.text(state.currentText)
        })
    }

    storeChanged(currentText) {
        this.$formula.text(currentText)
    }

    onInput(event) {
        this.$emit('formula:input', $(event.target).text())
    }

    onKeydown(event) {
        const keys = ['Enter', 'Tab']
        if (keys.includes(event.key)) {
            event.preventDefault()
            this.$emit('formula:done')
        }
    }
}
