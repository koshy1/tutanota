// @flow

import {create, TypeRef} from "../../common/EntityFunctions"

export const ReportPhishingPostDataTypeRef: TypeRef<ReportPhishingPostData> = new TypeRef("tutanota", "ReportPhishingPostData")
export const _TypeModel: TypeModel = {
	"name": "ReportPhishingPostData",
	"since": 40,
	"type": "DATA_TRANSFER_TYPE",
	"id": 1034,
	"rootId": "CHR1dGFub3RhAAQK",
	"versioned": false,
	"encrypted": false,
	"values": {
		"_format": {
			"name": "_format",
			"id": 1035,
			"since": 40,
			"type": "Number",
			"cardinality": "One",
			"final": false,
			"encrypted": false
		}
	},
	"associations": {
		"mailData": {
			"name": "mailData",
			"id": 1036,
			"since": 40,
			"type": "AGGREGATION",
			"cardinality": "One",
			"refType": "ReportedMailData",
			"final": false
		}
	},
	"app": "tutanota",
	"version": "40"
}

export function createReportPhishingPostData(values?: $Shape<$Exact<ReportPhishingPostData>>): ReportPhishingPostData {
	return Object.assign(create(_TypeModel, ReportPhishingPostDataTypeRef), values)
}