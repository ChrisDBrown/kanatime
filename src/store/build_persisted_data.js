import kanadb from '../assets/kana_db'
import optionsdb from '../assets/options_defaults'

let buildResults = []
if (window.localStorage.getItem('results')) {
  buildResults = JSON.parse(window.localStorage.getItem('results'))
} else {
  buildResults = kanadb.map(kana => ({
    'id': kana.id,
    'success': 0,
    'failure': 0,
    'skipped': 0,
    'shown': 0
  }))
}

export const results = buildResults

let optionsResults = {}
if (window.localStorage.getItem('options')) {
  optionsResults = JSON.parse(window.localStorage.getItem('options'))
} else {
  optionsResults = optionsdb
}

export const options = optionsResults
