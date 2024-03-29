import React, { useEffect, useRef } from 'react'
import { useState } from 'reinspect'
import { Button, Card, CardBody, CardHeader, Col, Row, FormGroup, Label, CardFooter, Input, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { DatePicker } from 'antd';
import moment from 'moment';
import WidgetCustom from '../Widgets/WidgetCustom'
import { SideProfile } from '../DetailPegawai/SideProfile'
import {
	getTypeMutation,
	storeMutationMultiple,
	getWorkUnit,
	getPosition,
	getFieldFunction,
	getGrade,
	getTitleName,
	getEmployeeStatus,
	getBodGroup,
	addNewPosition,
	addNewFieldFunction,
	addNewJabatan
} from './endpoint/mutationUserEndpoint'
import { useForm } from 'react-hook-form';
import { getDataPegawai, getRangkapan } from '../DetailPegawai/endpoint/DetailPegawaiEndpoint'
import { getDataFilterPegawai } from '../DataMater/ListPegawai/endpoint/ListPegawaiEndpoint'
import NotifSwal from '../../MyComponent/notification/Swal'
import { Select, Checkbox } from 'antd'
import produce from "immer";
import Swal from 'sweetalert2'

const { Option } = Select;

const dateFormat = 'YYYY/MM/DD';

const InputMutasiPromosiPegawai = (props) => {
	const [dataTipeMutasi, setDataTipeMutasi] = useState([], 'dataTipeMutasi')
	const [allPegawai, setAllPegawai] = useState([], "dataPegawai");
	const [dataUnitKerja, setDataUnitKerja] = useState([], "dataUnitKerja");
	const [dataPosisi, setDataPosisi] = useState([], "dataPosisi");
	const [dataPosisiRangkapan, setDataPosisiRangkapan] = useState([], "dataPosisiRangkapan");
	const [dataFungsiBidang, setDataFungsiBidang] = useState([], "dataFungsiBidang");
	const [dataGrade, setDataGrade] = useState([], "dataGrade");
	const [dataJabatan, setDataJabatan] = useState([], "dataJabatan");
	const [dataBodGroup, setDataBodGroup] = useState([], "dataBodGroup");
	const [dataStatusKaryawan, setStatusKaryawan] = useState([], "dataStatusKaryawan");
	const [type, setType] = useState("")
	const initialValuesInput = [{ isCancelEmployee: false, multipleFieldInRangkap: 1 }]
	const [payload, setPayload] = useState(initialValuesInput, "payload")
	const [positionIdSelesaiPJS, setPositionIdSelesaiPJS] = useState(1, "positionIdSelesaiPJS")
	const [addNewInput, setAddNewInput] = useState({})
	const [isModalCreateNewOpen, setIsModalCreateNewOpen] = useState({ open: false });

	const immerSetState = newState => setPayload(currentState => produce(currentState, newState));

	let pegawaiList = [];
	Array.from(allPegawai).forEach((value) => { pegawaiList.push(<Option key={value.id} value={value.id.toString()}>{`${value.nip} - ${value.name}`}</Option>) }
	);


	const { register, handleSubmit, watch } = useForm();

	const onSubmit = async (data) => {
		const payloadRemoveField = data.map(({ dataDetailPegawai, isCancelEmployee, multipleFieldInRangkap, ...rest }) => rest)
		const payloadSend = payloadRemoveField.map((v, i) => {
			let res
			if (v.typeMutation === 'MUTASI JABATAN')
				res = {
					typeMutation: v.typeMutation,
					kindMutation: v.kindMutation,
					workUnitId: parseInt(v.workUnitId),
					positionId: parseInt(v.positionId),
					fieldFunctionId: parseInt(v.fieldFunctionId),
					gradeId: parseInt(v.gradeId),
					userId: parseInt(v.userId),
					validDate: v.validDate,
					titleName: v.titleName,
					notes: v.notes,
					bodGroup: v.bodGroup
				}

			if (v.typeMutation === 'PROMOSI JABATAN')
				res = {
					typeMutation: v.typeMutation,
					kindMutation: v.kindMutation,
					workUnitId: parseInt(v.workUnitId),
					positionId: parseInt(v.positionId),
					fieldFunctionId: parseInt(v.fieldFunctionId),
					gradeId: parseInt(v.gradeId),
					userId: parseInt(v.userId),
					validDate: v.validDate,
					titleName: v.titleName,
					notes: v.notes,
					bodGroup: v.bodGroup
				}

			if (v.typeMutation === 'PROMOSI STATUS')
				res = {
					typeMutation: v.typeMutation,
					kindMutation: v.kindMutation,
					userId: parseInt(v.userId),
					validDate: v.validDate,
					employeeStatus: v.employeeStatus,
					nip: v.nip,
					notes: v.notes,
				}
			if (v.typeMutation === 'MUTASI NON AKTIF')
				res = {
					typeMutation: v.typeMutation,
					kindMutation: v.kindMutation,
					userId: parseInt(v.userId),
					validDate: v.validDate,
					notes: v.notes,
				}


			if (v.typeMutation === 'RANGKAPAN' && v.kindMutation === 'PJS RANGKAP')
				res = {
					typeMutation: v.typeMutation,
					kindMutation: v.kindMutation,
					userId: parseInt(v.userId),
					validDate: v.validDate,
					payload: v.payload,
					notes: v.notes,
				}

			if (v.typeMutation === 'RANGKAPAN' && v.kindMutation === 'SELESAI PJS')
				res = {
					typeMutation: v.typeMutation,
					kindMutation: v.kindMutation,
					userId: parseInt(v.userId),
					validDate: v.validDate,
					userPositionId: v.userPositionId,
					notes: v.notes,
				}

			console.log("onSubmit -> res rangkapan", res)
			return res
		})


		Swal.fire({
			title: 'Apakah Kamu Yakin?',
			text: 'Kamu Akan Mengubah Data Karyawan',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Ya, Simpan!',
			cancelButtonText: 'Tidak, Batalkan '
		}).then((result) => {
			if (result.value) {
				const { code } = storeMutationMultiple(payloadSend)
				if (code > 201) {
					Swal.fire(
						'Batalkan',
						'Batalkan Input Mutasi Promosi',
						'error'
					)
				} else {
					Swal.fire(
						'Simpan!',
						'Sukses Simpan Mutasi Promosi.',
						'success'
					).then((result) => {
						if (result.value) window.location.reload()
					})

				}

			} else if (result.dismiss === Swal.DismissReason.cancel) {
				Swal.fire(
					'Batalkan',
					'Batalkan Input Mutasi Promosi',
					'error'
				)
			}
		})
	}


	const chooseTypeValue = (e) => {
		setType(e.target.value)
	}

	const chooseEmployeeValueArray = async (value, name) => {
		const valueLength = value.length - 1
		const userId = value[value.length - 1]
		let data
		if (userId != undefined) {
			let { data: detailPegawai } = await getDataPegawai(userId)
			data = detailPegawai
			if (!detailPegawai) return
		}

		let typeMutation
		if (type == 1) {
			typeMutation = 'MUTASI JABATAN'
		} else if (type == 2) {
			typeMutation = 'PROMOSI JABATAN'
		} else if (type == 3) {
			typeMutation = 'PROMOSI STATUS'
		} else if (type == 4) {
			typeMutation = 'MUTASI NON AKTIF'
		} else if (type == 5) {
			typeMutation = 'RANGKAPAN'
		}


		if (!payload[0].isCancelEmployee && userId != undefined) {
			immerSetState(draft => {
				if (payload.length <= valueLength) draft.push({})
				draft[valueLength]['typeMutation'] = typeMutation
				draft[valueLength][name] = parseInt(userId)
				draft[valueLength].dataDetailPegawai = data
				draft[0]['isCancelEmployee'] = false
				draft[valueLength]['multipleFieldInRangkap'] = 1
			})
		}
	}

	const handleDeselectEmployee = (value) => {
		const sisaPayloadAfterRemove = payload.filter(v => v.userId !== parseInt(value))
		setPayload(sisaPayloadAfterRemove)
		if (payload.length > 1) {
			immerSetState(draft => {
				draft[0]['isCancelEmployee'] = true
			})
		} else {
			setPayload([{ isCancelEmployee: false }])
		}
	}


	const _handleSelectInputHelper = (value, name, i, checked = false) => {
		console.log("value", value)
		console.log("name", name)
		console.log("i", i)
		console.log("checked", checked)
		immerSetState(draft => {
			if (name !== "employeeStatus" && name !== "titleName" && name !== "bodGroup") {
				draft[i][name] = parseInt(value)
			} else {
				draft[i][name] = value
			}
		})
	}

	const _handleSelectRangkapanInputHelper = (value, name, i, j) => {
		immerSetState(draft => {
			if (!draft[i]['payload']) draft[i]['payload'] = [{}]
			if (j === 1 && draft[i]['payload'].length === 1) draft[i]['payload'][j] = {}

			if (name !== "employeeStatus" && name !== "titleName") {
				draft[i]['payload'][j][name] = parseInt(value)
			} else {
				draft[i]['payload'][j][name] = value
			}
		})
	}

	const _handleSelectInputTextHelper = (value, name, i) => {
		immerSetState(draft => {
			draft[i][name] = value
		})
	}
	const _handleOnChangeDatePicker = (date, dateString, name, i) => {
		let converDate = moment(dateString).format('MM/DD/YYYY')
		immerSetState(draft => {
			draft[i][name] = converDate
		})
	}

	const _handleSelectInputNotesHelper = (e, i) => {
		const { name, value } = e.target
		immerSetState(draft => {
			draft[i][name] = value
		})
	}

	const getDataTipeMutasi = async () => {
		let { data } = await getTypeMutation()
		if (!data) return
		setDataTipeMutasi(data)
	}

	const getAllPegawai = async () => {
		let { data } = await getDataFilterPegawai()
		if (!data) return

		setAllPegawai(data)
	}

	const getUnitKerja = async () => {
		let { data } = await getWorkUnit()
		if (!data) return
		setDataUnitKerja(data)
	}

	const getPosisi = async () => {
		let { data } = await getPosition()
		if (!data) return
		setDataPosisi(data)
	}

	const getPosisiRangkapan = async (id) => {
		let { data } = await getRangkapan(id)
		if (!data) return
		setDataPosisiRangkapan(data)
	}

	const _handeGetBodGroup = async () => {
		let { data } = await getBodGroup()
		if (!data) return
		setDataBodGroup(data)
	}

	const getFungsiBidang = async () => {
		let { data } = await getFieldFunction()
		if (!data) return
		setDataFungsiBidang(data)
	}

	const getGradeId = async () => {
		let { data } = await getGrade()
		if (!data) return
		setDataGrade(data)
	}

	const getJabatan = async () => {
		let { data } = await getTitleName()
		if (!data) return
		setDataJabatan(data)
	}

	const getStatusKaryawan = async () => {
		let { data } = await getEmployeeStatus()
		if (!data) return
		setStatusKaryawan(data)
	}

	const onChange = (e, i) => {
		immerSetState(draft => {
			draft[i]['userPositionId'] = e.target.value
		})
		setPositionIdSelesaiPJS(e.target.value)
	};

	const onChangeAddNewInput = (e, id) => {
		setAddNewInput({
			...addNewInput,
			[id]: e.target.value
		})
	}

	const onKeyDownAddNewInput = (e, id) => {
		if (e.key == "Enter") {
			if (addNewInput[id]) setIsModalCreateNewOpen({ id, open: true })

			document.getElementById(id).blur()
		}
	}

	const onSubmitSuccess = (id) => {
		document.getElementById(id).value = ""
		setAddNewInput({
			...addNewInput,
			[id]: ""
		})
		setIsModalCreateNewOpen({ open: false });
	}

	const onSubmitNewInput = () => {
		const id = isModalCreateNewOpen.id
		if (id == "addNewJabatan") {
			_addNewJabatan(id)
		} else if (id == "addNewFungsiBidang") {
			_addNewFungsiBidang(id)

		} else if (id == "addNewPosisi") {
			_addNewPosition(id)
		}
	}

	const _addNewPosition = async (id) => {
		let body = { name: addNewInput.addNewPosisi }
		const { data } = await addNewPosition(body)
		if (data) {
			onSubmitSuccess(id)
			getPosisi()
		}

		if (!data) return
	}

	const _addNewFungsiBidang = async (id) => {
		let body = { name: addNewInput.addNewFungsiBidang }
		const { data } = await addNewFieldFunction(body)

		if (data) {
			onSubmitSuccess(id)
			getFungsiBidang()
		}

		if (!data) return
	}

	const _addNewJabatan = async (id) => {
		let newData = [...dataJabatan]
		newData.unshift({ titleName: addNewInput.addNewJabatan })
		setDataJabatan(newData)
		onSubmitSuccess(id)
	}

	useEffect(() => {
		getDataTipeMutasi()
		getAllPegawai()
		getUnitKerja()
		getPosisi()
		getFungsiBidang()
		getGradeId()
		getJabatan()
		getStatusKaryawan()
		_handeGetBodGroup()
	}, [])

	useEffect(() => {
		if (payload[0].kindMutation === 'SELESAI PJS') getPosisiRangkapan(payload[0].userId)
	}, [payload[0].kindMutation])

	let jsxMultipleFieldInRangkap = (i) => {
		let res = []
		for (let j = 0; j < payload[i].multipleFieldInRangkap; j++) {
			res.push(
				<div style={{ padding: '15px' }}>
					<Row style={{ backgroundColor: '#fafafa', padding: '10px', marginTop: '5px', marginBottom: '5px' }}>
						<Col xs="12">
							<div className="float-r">
								{
									j == 0 ||
									<Button className="float-right mb-15" onClick={() => {
										immerSetState(draft => {
											draft[i]['multipleFieldInRangkap'] = payload[i].multipleFieldInRangkap - 1
										})
									}} size="xs" color="danger">
										<i className="fa fa-times" ></i>
									</Button>
								}
							</div>
						</Col>
						<Col xs="12">
							<FormGroup>
								<Label htmlFor="ccmonth">Unit Kerja</Label>
								<Select
									showSearch
									style={{ width: "100%" }}
									placeholder="Pilih Unit Kerja"
									optionFilterProp="children"
									onChange={value => _handleSelectRangkapanInputHelper(value, 'workUnitId', i, j)}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									{dataUnitKerja.map((value, idx) => (
										<Option key={idx} value={`${value.id}`}>{value.name}</Option>
									))}
								</Select>
							</FormGroup>
						</Col>
						<Col xs="4">
							<FormGroup>
								<Label htmlFor="ccmonth">Jabatan</Label>
								<Select
									showSearch
									style={{ width: "100%" }}
									placeholder="Pilih Jabatan"
									optionFilterProp="children"
									onChange={value => _handleSelectRangkapanInputHelper(value, 'titleName', i, j)}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									{dataJabatan.map((value, idx) => (
										<Option key={idx} value={`${value.titleName}`}>{value.titleName}</Option>
									))}
								</Select>
							</FormGroup>
						</Col>
						<Col xs="4">
							<FormGroup>
								<Label htmlFor="ccmonth">Posisi</Label>
								<Select
									showSearch
									style={{ width: "100%" }}
									placeholder="Pilih Posisi"
									optionFilterProp="children"
									onChange={value => _handleSelectRangkapanInputHelper(value, 'positionId', i, j)}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									{dataPosisi.map((value, idx) => (
										<Option key={idx} value={`${value.id}`}>{value.name}</Option>
									))}
								</Select>
							</FormGroup>
						</Col>
						<Col xs="4">
							<FormGroup>
								<Label htmlFor="ccmonth">Fungsi Bidang</Label>
								<Select
									showSearch
									style={{ width: "100%" }}
									placeholder="Pilih Fungsi Bidang"
									optionFilterProp="children"
									onChange={value => _handleSelectRangkapanInputHelper(value, 'fieldFunctionId', i, j)}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									{dataFungsiBidang.map((value, idx) => (
										<Option key={idx} value={`${value.id}`}>{value.name}</Option>
									))}
								</Select>
							</FormGroup>
						</Col>
						<Col xs="4">
							<FormGroup>
								<Label htmlFor="ccmonth">Grade</Label>
								<Select
									showSearch
									style={{ width: "100%" }}
									placeholder="Pilih Grade"
									optionFilterProp="children"
									onChange={value => _handleSelectRangkapanInputHelper(value, 'gradeId', i, j)}
								>
									{dataGrade.map((value, idx) => (
										<Option key={idx} value={`${value.id}`}>{value.class}</Option>
									))}
								</Select>
							</FormGroup>
						</Col>
					</Row>
				</div>
			)
		}
		return res
	}



	return (
		<div className="animated fadeIn">
			<form onSubmit={handleSubmit(() => onSubmit(payload))}>
				<Row>
					<Col xl={12}>
						<Card>
							<CardHeader>
								<i className="fa fa-user"></i> Input Mutasi Promosi Pegawai
                            </CardHeader>
							<CardBody>
								<Row>
									<Col xs="4">
										<FormGroup>
											<Label htmlFor="ccmonth">Tipe</Label>
											<Input type="select" name="typeMutationId" id="product" required innerRef={register({ required: true })} onChange={(e) => chooseTypeValue(e)}>
												<option value=""> Pilih Tipe Mutasi</option>
												{dataTipeMutasi.map(value => (
													<option value={value.id}>{value.name}</option>
												))}
											</Input>
										</FormGroup>
									</Col>
									<Col xs="8">
										<FormGroup>
											<Label htmlFor="ccmonth">Pilih Pegawai</Label>
											<Select
												mode="tags"
												style={{ width: '100%', height: '100%' }}
												placeholder="Pilih Pegawai"
												onChange={value => chooseEmployeeValueArray(value, 'userId')}
												onDeselect={handleDeselectEmployee}
												optionFilterProp="children"
												filterOption={(input, option) =>
													option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
												}>
												{pegawaiList}
											</Select>
										</FormGroup>
									</Col>
								</Row>
							</CardBody>
						</Card>
						<Card>
							<CardBody>
								<Row>
									<Col>
										<Input
											type="text"
											id="addNewJabatan"
											placeholder="Tambah jabatan baru"
											onKeyDown={(e) => onKeyDownAddNewInput(e, "addNewJabatan")}
											onChange={value => onChangeAddNewInput(value, 'addNewJabatan')}
										/>
										<Button color="primary" size="sm" onClick={(e) => onKeyDownAddNewInput(e, "addNewJabatan")}><i className="fa fa-plus" ></i></Button>
									</Col>
									<Col>
										<Input
											type="text"
											id="addNewPosisi"
											placeholder="Tambah posisi baru"
											onKeyDown={(e) => onKeyDownAddNewInput(e, "addNewPosisi")}
											onChange={value => onChangeAddNewInput(value, 'addNewPosisi')}
										/>
										<Button color="primary" size="sm" onClick={(e) => onKeyDownAddNewInput(e, "addNewPosisi")}><i className="fa fa-plus" ></i></Button>
									</Col>
									<Col>
										<Input
											type="text"
											id="addNewFungsiBidang"
											placeholder="Tambah fungsi bidang baru"
											onKeyDown={(e) => onKeyDownAddNewInput(e, "addNewFungsiBidang")}
											onChange={value => onChangeAddNewInput(value, 'addNewFungsiBidang')}
										/>
										<Button color="primary" size="sm" onClick={(e) => onKeyDownAddNewInput(e, "addNewFungsiBidang")}><i className="fa fa-plus" ></i></Button>
									</Col>
								</Row>
							</CardBody>
						</Card>
						<Modal isOpen={isModalCreateNewOpen.open} toggle={() => setIsModalCreateNewOpen(!isModalCreateNewOpen.open)}>
							<ModalBody>Apakah yakin untuk menambahkan ini?</ModalBody>
							<ModalFooter>
								<Button color="primary" onClick={() => onSubmitNewInput()}>Submit</Button>{' '}
								<Button color="secondary" onClick={() => setIsModalCreateNewOpen(false)}>Cancel</Button>
							</ModalFooter>
						</Modal>
					</Col>

					{type && payload[0].userId &&
						<>
							<Col xl={9}>
							</Col>
							<Col xl={3} >
								<Button className="float-right mb-15" type="submit" size="xl" color="primary"><i className="fa fa-save" ></i> SAVE</Button> &nbsp;
                                <Button className="float-right mb-15" onClick={() => window.location.reload()} type="button" size="xl" color="default"><i className="fa fa-times" ></i> CANCEL</Button> &nbsp;
                            </Col>
						</>
					}

					{type == 1 && payload[0].userId && (
						payload.map((v, i) => {
							return (
								<>
									<Col xl={3} key={i}>
										<WidgetCustom
											dataBox={() => ({ variant: 'twitter' })}
											name={v.dataDetailPegawai.name}
											nip={v.dataDetailPegawai.nip}
											employeeStatus={v.dataDetailPegawai.employeeStatus}
										// titleName={v.dataDetailpegawai.titleName}
										//     position={v.dataDetailpegawai.employeeStatus}
										/>
									</Col>
									<Col xl={9}>
										<Card>
											<CardHeader>
												<i className="fa fa-user"></i>Mutasi Jabatan
                                        </CardHeader>
											<CardBody>
												<Row>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">Jenis Mutasi</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Jenis Mutasi"
																optionFilterProp="children"
																onChange={value => _handleSelectInputTextHelper(value, 'kindMutation', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																<Option value="UTAMA">UTAMA</Option>
																<Option value="UTAMA PJS">UTAMA (PJS)</Option>
															</Select>
														</FormGroup>
													</Col>
												</Row>
												<Row>
													<Col xs="3">
														<FormGroup>
															<Label htmlFor="ccmonth">Tanggal</Label><br />
															<DatePicker className="col-md-12" onChange={(date, dateString) => _handleOnChangeDatePicker(date, dateString, 'validDate', i)} defaultValue={moment(new Date())} format={dateFormat} />
														</FormGroup>
													</Col>
												</Row>
												<Row>
													<Col xs="12">
														<FormGroup>
															<Label htmlFor="ccmonth">Unit Kerja</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Unit Kerja"
																optionFilterProp="children"
																onChange={value => _handleSelectInputHelper(value, 'workUnitId', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																{dataUnitKerja.map(value => (
																	<Option value={`${value.id}`}>{value.name}</Option>
																))}
															</Select>
														</FormGroup>
													</Col>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">Jabatan</Label>

															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Jabatan"
																optionFilterProp="children"
																onChange={value => _handleSelectInputHelper(value, 'titleName', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																{dataJabatan.map(value => (
																	<Option value={`${value.titleName}`}>{value.titleName}</Option>
																))}
															</Select>
														</FormGroup>
													</Col>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">Posisi</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Posisi"
																optionFilterProp="children"
																onChange={value => _handleSelectInputHelper(value, 'positionId', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																{dataPosisi.map(value => (
																	<Option value={`${value.id}`}>{value.name}</Option>
																))}
															</Select>
														</FormGroup>
													</Col>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">Fungsi Bidang</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Fungsi Bidang"
																optionFilterProp="children"
																onChange={value => _handleSelectInputHelper(value, 'fieldFunctionId', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																{dataFungsiBidang.map(value => (
																	<Option value={`${value.id}`}>{value.name}</Option>
																))}
															</Select>
														</FormGroup>
													</Col>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">Grade</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Grade"
																optionFilterProp="children"
																onChange={value => _handleSelectInputHelper(value, 'gradeId', i)}
															>
																{dataGrade.map(value => (
																	<Option value={`${value.id}`}>{value.class}</Option>
																))}
															</Select>
														</FormGroup>
													</Col>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">BOD Group</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Grup BOD"
																optionFilterProp="children"
																onChange={value => _handleSelectInputHelper(value, 'bodGroup', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																{dataBodGroup.map(value => (
																	<Option value={`${value.bodGroup}`}>{value.bodGroup}</Option>
																))}
															</Select>
														</FormGroup>
													</Col>
												</Row>
												<Row>
													<Col xs="12">
														<Label htmlFor="ccmonth">Deskripsi</Label>
														<Input type="textarea" name="notes" onChange={(e) => _handleSelectInputNotesHelper(e, i)} id="exampleText" innerRef={register({ required: true })} />
													</Col>
												</Row>
											</CardBody>
										</Card>
									</Col>
								</>
							)
						})

					)}

					{type == 2 && payload[0].userId && (
						payload.map((v, i) => {
							return (
								<>
									<Col xl={3} key={i}>
										<WidgetCustom
											dataBox={() => ({ variant: 'twitter' })}
											name={v.dataDetailPegawai.name}
											nip={v.dataDetailPegawai.nip}
											employeeStatus={v.dataDetailPegawai.employeeStatus}
										// titleName={v.dataDetailpegawai.titleName}
										//     position={v.dataDetailpegawai.employeeStatus}
										/>
									</Col>
									<Col xl={9}>
										<Card>
											<CardHeader>
												<i className="fa fa-user"></i> Promosi Jabatan
                                        </CardHeader>
											<CardBody>
												<Row>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">Jenis Mutasi</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Jenis Mutasi"
																optionFilterProp="children"
																onChange={value => _handleSelectInputTextHelper(value, 'kindMutation', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																<Option value="UTAMA">UTAMA</Option>
																<Option value="UTAMA PJS">UTAMA (PJS)</Option>
															</Select>
														</FormGroup>
													</Col>
												</Row>
												<Row>
													<Col xs="3">
														<FormGroup>
															<Label htmlFor="ccmonth">Tanggal</Label><br />
															<DatePicker className="col-md-12" onChange={(date, dateString) => _handleOnChangeDatePicker(date, dateString, 'validDate', i)} defaultValue={moment(new Date())} format={dateFormat} />
														</FormGroup>
													</Col>
												</Row>
												<Row>
													<Col xs="12">
														<FormGroup>
															<Label htmlFor="ccmonth">Unit Kerja</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Unit Kerja"
																optionFilterProp="children"
																onChange={value => _handleSelectInputHelper(value, 'workUnitId', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																{dataUnitKerja.map(value => (
																	<Option value={`${value.id}`}>{value.name}</Option>
																))}
															</Select>
														</FormGroup>
													</Col>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">Jabatan</Label>

															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Jabatan"
																optionFilterProp="children"
																onChange={value => _handleSelectInputHelper(value, 'titleName', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																{dataJabatan.map(value => (
																	<Option value={`${value.titleName}`}>{value.titleName}</Option>
																))}
															</Select>
														</FormGroup>
													</Col>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">Posisi</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Posisi"
																optionFilterProp="children"
																onChange={value => _handleSelectInputHelper(value, 'positionId', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																{dataPosisi.map(value => (
																	<Option value={`${value.id}`}>{value.name}</Option>
																))}
															</Select>
														</FormGroup>
													</Col>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">Fungsi Bidang</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Fungsi Bidang"
																optionFilterProp="children"
																onChange={value => _handleSelectInputHelper(value, 'fieldFunctionId', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																{dataFungsiBidang.map(value => (
																	<Option value={`${value.id}`}>{value.name}</Option>
																))}
															</Select>
														</FormGroup>
													</Col>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">Grade</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Grade"
																optionFilterProp="children"
																onChange={value => _handleSelectInputHelper(value, 'gradeId', i)}
															>
																{dataGrade.map(value => (
																	<Option value={`${value.id}`}>{value.class}</Option>
																))}
															</Select>
														</FormGroup>
													</Col>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">BOD Group</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Grup BOD"
																optionFilterProp="children"
																onChange={value => _handleSelectInputHelper(value, 'bodGroup', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																{dataBodGroup.map(value => (
																	<Option value={`${value.bodGroup}`}>{value.bodGroup}</Option>
																))}
															</Select>
														</FormGroup>
													</Col>
												</Row>
												<Row>
													<Col xs="12">
														<Label htmlFor="ccmonth">Deskripsi</Label>
														<Input type="textarea" name="notes" onChange={(e) => _handleSelectInputNotesHelper(e, i)} id="exampleText" innerRef={register({ required: true })} />
													</Col>
												</Row>
											</CardBody>
										</Card>
									</Col>
								</>
							)
						})

					)}

					{(type == 3 && payload[0].userId &&
						payload.map((v, i) => {
							return (
								<>
									<Col xl={3} key={i}>
										<WidgetCustom
											dataBox={() => ({ variant: 'twitter' })}
											name={v.dataDetailPegawai.name}
											nip={v.dataDetailPegawai.nip}
											employeeStatus={v.dataDetailPegawai.employeeStatus}
										// titleName={v.dataDetailpegawai.titleName}
										//     position={v.dataDetailpegawai.employeeStatus}
										/>
									</Col>
									<Col xl={9}>
										<Card>
											<CardHeader>
												<i className="fa fa-user"></i> Promosi Status
                                        </CardHeader>
											<CardBody>
												<Row>
													<Col xs="3">
														<FormGroup>
															<Label htmlFor="ccmonth">Tanggal</Label><br />
															<DatePicker className="col-md-12" onChange={(date, dateString) => _handleOnChangeDatePicker(date, dateString, 'validDate', i)} defaultValue={moment(new Date())} format={dateFormat} />
														</FormGroup>
													</Col>
												</Row>
												<Row>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">Pilih Status</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Status"
																optionFilterProp="children"
																onChange={value => _handleSelectInputHelper(value, 'employeeStatus', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																{dataStatusKaryawan.map(value => (
																	<Option value={`${value.employeeStatus}`}>{value.employeeStatus}</Option>
																))}
															</Select>
														</FormGroup>
													</Col>
													<Col xs="4">
														<Label htmlFor="ccmonth">NIP</Label>
														<Input type="text" name="nip" onChange={(e) => _handleSelectInputNotesHelper(e, i)} id="exampleText" innerRef={register({ required: true })} />
													</Col>
												</Row>

												<Row>
													<Col xs="12">
														<Label htmlFor="ccmonth">Deskripsi</Label>
														<Input type="textarea" name="notes" onChange={(e) => _handleSelectInputNotesHelper(e, i)} id="exampleText" innerRef={register({ required: true })} />
													</Col>
												</Row>
											</CardBody>
										</Card>
									</Col>
								</>
							)
						})

					)}

					{type == 4 && payload[0].userId &&
						payload.map((v, i) => {
							return (
								<>
									<Col xl={3} key={i}>
										<WidgetCustom
											dataBox={() => ({ variant: 'twitter' })}
											name={v.dataDetailPegawai.name}
											nip={v.dataDetailPegawai.nip}
											employeeStatus={v.dataDetailPegawai.employeeStatus}
										// titleName={v.dataDetailpegawai.titleName}
										//     position={v.dataDetailpegawai.employeeStatus}
										/>
									</Col>
									<Col xl={9}>
										<Card>
											<CardHeader>
												<i className="fa fa-user"></i> Mutasi Non Aktif
                                        </CardHeader>
											<CardBody>
												<Row>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">Jenis Mutasi</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Jenis Mutasi"
																optionFilterProp="children"
																onChange={value => _handleSelectInputTextHelper(value, 'kindMutation', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																<Option value={`RESIGN`}>Resign </Option>
																<Option value={`PENSIUN`}>Pensiun </Option>
																<Option value={`PINDAH DEPARTEMENT`}>Pindah Departement</Option>
															</Select>
														</FormGroup>
													</Col>
												</Row>
												<Row>
													<Col xs="3">
														<FormGroup>
															<Label htmlFor="ccmonth">Tanggal Keluar</Label><br />
															<DatePicker className="col-md-12" onChange={(date, dateString) => _handleOnChangeDatePicker(date, dateString, 'validDate', i)} defaultValue={moment(new Date())} format={dateFormat} />
														</FormGroup>
													</Col>
												</Row>
												<Row>
													<Col xs="12">
														<Label htmlFor="ccmonth">Deskripsi</Label>
														<Input type="textarea" name="notes" onChange={(e) => _handleSelectInputNotesHelper(e, i)} id="exampleText" innerRef={register({ required: true })} />
													</Col>
												</Row>
											</CardBody>
										</Card>
									</Col>
								</>
							)
						})
					}


					{type == 5 && payload[0].userId &&

						payload.map((v, i) => {
							return (
								<>

									<Col xl={3} key={i}>
										<WidgetCustom
											dataBox={() => ({ variant: 'twitter' })}
											name={v.dataDetailPegawai.name}
											nip={v.dataDetailPegawai.nip}
											employeeStatus={v.dataDetailPegawai.employeeStatus}
										// titleName={v.dataDetailpegawai.titleName}
										// position={v.dataDetailpegawai.employeeStatus}
										/>
									</Col>
									<Col xl={9}>
										<Card>
											<CardHeader>
												<i className="fa fa-user"></i>Mutasi Rangkapan
                                                </CardHeader>
											<CardBody>
												<Row>
													<Col xs="4">
														<FormGroup>
															<Label htmlFor="ccmonth">Jenis Rangkapan</Label>
															<Select
																showSearch
																style={{ width: "100%" }}
																placeholder="Pilih Jenis Rangkapan"
																optionFilterProp="children"
																onChange={value => _handleSelectInputTextHelper(value, 'kindMutation', i)}
																filterOption={(input, option) =>
																	option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																}
															>
																<Option value={`PJS RANGKAP`}>PJS RANGKAP</Option>
																<Option value={`SELESAI PJS`}>SELESAI PJS </Option>
															</Select>
														</FormGroup>
													</Col>
												</Row>
												<Row>
													<Col xs="3">
														<FormGroup>
															<Label htmlFor="ccmonth">Tanggal</Label><br />
															<DatePicker className="col-md-12" onChange={(date, dateString) => _handleOnChangeDatePicker(date, dateString, 'validDate', i)} defaultValue={moment(new Date())} format={dateFormat} />
														</FormGroup>
													</Col>
												</Row>
												{v.kindMutation == 'PJS RANGKAP' ?
													jsxMultipleFieldInRangkap(i) :
													<div style={{ textAlign: 'justify' }}>
														{dataPosisiRangkapan.map((v, i) => {
															return (
																<Row key={i}>
																	<Col xs="12">
																		<Checkbox onChange={(e) => _handleSelectInputHelper(v.id, 'userPositionId', i, e.target.checked)}>
																			{`${v.jobStatus}: Jabatan: ${v.titleName}`}
																			{/* {`${v.jobStatus}: Jabatan: ${v.titleName}, Posisi: ${v.positionName}, Fungsi Bidang: ${v.fieldFunctionName}, Unit Kerja: ${v.workUnitName}, grade: ${v.gradeId}`}  */}
																		</Checkbox>
																	</Col>
																</Row>
															)
														})}
													</div>

												}
												{
													v.kindMutation == 'PJS RANGKAP' &&
													<Row>
														<Col xs={12}>
															<Button className={`float-right mb-15 width-100 ${payload[i].multipleFieldInRangkap == 2 ? 'avoid-clicks' : ''}`}
																onClick={() => {
																	immerSetState(draft => {
																		draft[i]['multipleFieldInRangkap'] = payload[i].multipleFieldInRangkap + 1
																	})
																}} size="xl" color="primary" disabled={payload[i].multipleFieldInRangkap == 2 ? true : false}>
																<i className="fa fa-plus" ></i>
                                                                Tambah
                                                            </Button>
														</Col>
													</Row>
												}
												<Row>
													<Col xs="12">
														<Label htmlFor="ccmonth">Deskripsi</Label>
														<Input type="textarea" name="notes" onChange={(e) => _handleSelectInputNotesHelper(e, i)} id="exampleText" innerRef={register({ required: true })} />
													</Col>
												</Row>
											</CardBody>
										</Card>
									</Col>
								</>
							)
						})
					}
				</Row>
			</form>
		</div>
	)
}

const radioStyle = {
	display: 'block',
	height: '30px',
	lineHeight: '30px',
};


export default InputMutasiPromosiPegawai
