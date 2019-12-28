export const initialState = localStorage.getItem('reduxState') ?
    JSON.parse(localStorage.getItem('reduxState')) :
    {
        qtyPegawai: 20,
        qtyProyek: 10,
        dataKomposisiPegawai: [
            { name: 'Organik', y: 61.41, },
            { name: 'Terampil', y: 11.84 },
            { name: 'Outsource', y: 8.85 },
            { name: 'PPCP', y: 7.67 },
            { name: 'Magang', y: 4.18 }
        ],
        dataPendidikan: [
            { name: 'S2', y: 10.41 },
            { name: 'S1', y: 41.84 },
            { name: 'D4', y: 30.85 },
            { name: 'D3', y: 4.67 },
            { name: 'SMA', y: 4.18 }
        ],
        dataKategoriProyek: [
            { name: 'Mega', y: 11.41 },
            { name: 'Besar', y: 21.84 },
            { name: 'Kecil', y: 30.85 },
            { name: 'Menengah', y: 24.67 },
        ],
        dataBODGroup: [
            { name: 'BOD-5', y: 20.41 },
            { name: 'BOD-4', y: 31.84 },
            { name: 'BOD-3', y: 10.85 },
            { name: 'BOD-2', y: 24.67 },
            { name: 'BOD-1', y: 4.18 },
        ],
        dataAssessment: [
            { name: 'Disarankan', y: 21.41 },
            { name: 'Disarankan dengan Pengembangan', y: 31.84 },
            { name: 'Tidak Disarankan', y: 30.85 },
        ],
        dataAssessment2: [
            { name: 'Disarankan', y: 21.41 },
            { name: 'Disarankan dengan Pengembangan', y: 31.84 },
            { name: 'Tidak Disarankan', y: 30.85 },
        ],
        dataMasaKerja: [
            { name: "0 - 5 tahun", y: 62.74 },
            { name: "6-10 tahun", y: 10.57 },
            { name: "11 - 15 tahun", y: 7.23 },
            { name: "16 - 20", y: 5.58 },
            { name: "21 - 25 tahun", y: 4.02 },
            { name: "26 - 30 tahun", y: 1.92 }
        ],
        dataUnitKerja: [
            { name: 'Divisi Pemasaran Sipil Umum', y: 61.41 },
            { name: 'Kantor Departemen', y: 30.85 },
            { name: 'Kantor Divisi', y: 4.67 },
            { name: 'Proyek Bandara Banyuwangi', y: 4.18 },
            { name: 'Proyek Double Double Track Manggarai - Jatinegara', y: 7.05 },
            { name: 'Proyek Gerbang Tol Bogor', y: 11.41 },
            { name: 'Proyek High Speed Railway Contractor Consotium (HSRCC) JO - Comittee Management', y: 10.85 },
            { name: 'Proyek High Speed Railway Contractor Consotium (HSRCC) JO - Project Team', y: 4.67 },
            { name: 'Proyek Lanjutan Pekerjaan Aksesbilitas', y: 4.18 },
            { name: 'Proyek LRT Kelapa Gading Velodrome (Main Works)', y: 7.05 },
            { name: 'Proyek Mass Rapid Transit (MRT CP101 & CP102 )', y: 21.41 },
            { name: 'Proyek MRT 104 & 105', y: 10.85 },
            { name: 'Proyek Pekerjaan Paket Penanganan Mendesak Bencana Alam Tanah Longsor Ruas Ciawi - Puncak - BTS, Kota Cianjur', y: 4.67 },
            { name: 'Proyek Pembangunan 6 Ruas Tol Dalam Kota', y: 4.18 },
            { name: 'Proyek Pembangunan Jalan Tol Serpong - Balaraja Seksi I A', y: 7.05 },
            { name: 'Proyek Rehabilitasi Saluran Tarum Barat Ruas Bekasi Cawang', y: 21.41 },
            { name: 'Proyek Soil Investigation', y: 10.85 },
            { name: 'Proyek Tol Kunciran', y: 4.67 }
        ],
        dataMBTI: [
            { name: "ENFJ", y: 100 },
            { name: "ENFP", y: 80 },
            { name: "ENTJ", y: 79 },
            { name: "ENTP", y: 75 },
            { name: "ESFJ", y: 70 },
            { name: "ESFP", y: 60 },
            { name: "ESTJ", y: 50 },
            { name: "ESTP", y: 49 },
            { name: "INFJ", y: 45 },
            { name: "INFP", y: 42 },
            { name: "INTJ", y: 40 },
            { name: "INTP", y: 39 },
            { name: "ISFJ", y: 32 },
            { name: "ISFP", y: 31 },
            { name: "ISTJ", y: 20 },
            { name: "ISTP", y: 1 },
        ],
    }

const setReduxStore = (obj) => localStorage.setItem('reduxState', JSON.stringify(obj))

export const reducer = (state, action) => {
    let res
    switch (action.type) {
        case "add-todo":
            res = {
                todos: [...state.todos, { text: action.text, completed: false }],
                todoCount: state.todoCount + 1
            };
            setReduxStore(res)
            return res
        case "toggle-todo":
            res = {
                todos: state.todos.map((t, idx) =>
                    idx === action.idx ? { ...t, completed: !t.completed } : t
                ),
                todoCount: state.todoCount
            }
            setReduxStore(res)
            return res
        case "get-list":
            res = action.payload

            setReduxStore(res)
            return res
        default:
            return state;
    }
};