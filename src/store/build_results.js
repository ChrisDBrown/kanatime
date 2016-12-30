import kanadb from '../assets/kana_db'

let results = []
if (window.localStorage.getItem('results')) {
  results = JSON.parse(window.localStorage.getItem('results'))
} else {
  results = kanadb.map(kana => ({
    'id': kana.id,
    'success': 0,
    'failure': 0,
    'skipped': 0,
    'shown': 0
  }))
}

export default results
