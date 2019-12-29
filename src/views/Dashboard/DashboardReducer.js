export const initialState = localStorage.getItem('reduxState') ?
    JSON.parse(localStorage.getItem('reduxState')) :
    {
        pegawai: { qty: 1 },
        proyek: { qty: 1 },
        dataKomposisiPegawai: [
            { name: 'Organik', y: 61.41, qty: 10 },
            { name: 'Terampil', y: 11.84, qty: 10 },
            { name: 'Outsource', y: 8.85, qty: 10 },
            { name: 'PPCP', y: 7.67, qty: 10 },
            { name: 'Magang', y: 4.18, qty: 10 }
        ],
        dataPendidikan: [
            { name: 'S2', y: 10.41, qty: 10 },
            { name: 'S1', y: 41.84, qty: 10 },
            { name: 'D4', y: 30.85, qty: 10 },
            { name: 'D3', y: 4.67, qty: 10 },
            { name: 'SMA', y: 4.18, qty: 10 }
        ],
        dataKategoriProyek: [
            { name: 'Mega', y: 11.41, qty: 10 },
            { name: 'Besar', y: 21.84, qty: 10 },
            { name: 'Kecil', y: 30.85, qty: 10 },
            { name: 'Menengah', y: 24.67, qty: 10 },
        ],
        dataBODGroup: [
            { name: 'BOD-5', y: 20.41, qty: 10 },
            { name: 'BOD-4', y: 31.84, qty: 10 },
            { name: 'BOD-3', y: 10.85, qty: 10 },
            { name: 'BOD-2', y: 24.67, qty: 10 },
            { name: 'BOD-1', y: 4.18, qty: 10 },
        ],
        dataAssessment: [
            { name: 'Disarankan', y: 21.41, qty: 10 },
            { name: 'Disarankan dengan Pengembangan', y: 31.84, qty: 10 },
            { name: 'Tidak Disarankan', y: 30.85, qty: 10 },
        ],
        dataAssessment2: [
            { name: 'Disarankan', y: 21.41, qty: 10 },
            { name: 'Disarankan dengan Pengembangan', y: 31.84, qty: 10 },
            { name: 'Tidak Disarankan', y: 30.85, qty: 10 },
        ],
        dataMasaKerja: [],
        dataUnitKerja: [],
        dataMBTI: [],
    }

const setReduxStore = (obj) => localStorage.setItem('reduxState', JSON.stringify(obj))

export const reducer = (state, action) => {
    let res
    switch (action.type) {
        case "get-list":
            res = {
                ...state,
                ...action.payload
            }
            setReduxStore(res)
            return res
        case "get-list-dataMasaKerja":
            res = {
                ...state,
                dataMasaKerja: action.payload
            }
            setReduxStore(res)
            return res
        case "get-list-dataUnitKerja":
            res = {
                ...state,
                dataUnitKerja: action.payload
            }
            setReduxStore(res)
            return res
        case "get-list-dataMBTI":
            res = {
                ...state,
                dataMBTI: action.payload
            }
            setReduxStore(res)
            return res
        default:
            return state;
    }
};