import {Excel} from '@/components/excel/Excel'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import {createStore} from 'core/createStore'
import {rootReducer} from '@/redux/rootReducer'
import './scss/index.scss'
import {storage} from 'core/utils'
import {initialState} from '@/redux/initialState'

const store = createStore(rootReducer, initialState)

store.subscribe(state => {
    console.log('app state', state)
    storage('excel-state', state)
})

const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table],
    store
})

excel.render()

console.log(store)
