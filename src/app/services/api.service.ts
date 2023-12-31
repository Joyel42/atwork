import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { param } from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  reportingAPi: string = 'http://testvedika.atai.ai/api/mgr-reporters/';

  reportingparams: any = new HttpParams().set('indirect', 'true');

  reportingDetails(): Observable<any> {
    return this.http.get(this.reportingAPi, { params: this.reportingparams });
  }

  attendanceApi: string = 'http://testvedika.atai.ai/api/attendance/';

  attendanceparam: any = new HttpParams();

  changeparam(data: any) {
    this.attendanceparam = data;
  }

  attendancedetails(): Observable<any> {
    return this.http.get(this.attendanceApi, { params: this.attendanceparam });
  }

  attendanceDownload(): Observable<any> {
    let attendanceDownloadParam = this.attendanceparam;
    attendanceDownloadParam.set('download', true);
    return this.http.get(this.reportDownloadUrl, {
      params: attendanceDownloadParam,
      observe: 'response',
      responseType: 'blob',
    });
  }

  reportMsgUrl: string =
    'http://testvedika.atai.ai/api/reportdatesavailability/';

  unavailableReportDate(): Observable<any> {
    return this.http.get(this.reportMsgUrl);
  }

  reportDownloadUrl: string = 'http://testvedika.atai.ai/api/report/';

  reportDownload(parameters:any): Observable<any> {

    return this.http.get(this.reportDownloadUrl, {
      params: parameters,
      observe: 'response',
      responseType: 'blob',
    });
  }


  leaveHistoryUrl:string = "http://testvedika.atai.ai/api/leave/request/";

  leavehistoryparams = new HttpParams().set("filter","history");

  changeleavehistoryparam(data: any) {
    this.leavehistoryparams = data;
  }

  getleaveHistory():Observable<any>{
    return this.http.get(this.leaveHistoryUrl,{params:this.leavehistoryparams});
  }

  leaveBallanceUrl:string = "http://testvedika.atai.ai/api/leave/balance/";

  getleavebalance():Observable<any>{
    return this.http.get(this.leaveBallanceUrl);
  }

  leavependingparams = new HttpParams().set("filter","pending");

  changeleavependingparam(data: any) {
    this.leavehistoryparams = data;
  }

  getpendingleave():Observable<any>{
    return this.http.get(this.leaveHistoryUrl,{params:this.leavependingparams});
  }

  downloadLeaveHistoryUrl = "http://testvedika.atai.ai/api/leave/export-resolved/";

  downloadLeaveHistory(parameters:any){
    return this.http.get(this.downloadLeaveHistoryUrl,{params:parameters,
      observe:'response',
      responseType: 'blob'})
  }

  leaveTypesUrl:string="http://testvedika.atai.ai/api/leave/config/category/";

  getLeaveTypes(parameters:any):Observable<any>{  
    return this.http.get(this.leaveTypesUrl,{params:parameters});
  }

  holidayUrl:string ="http://testvedika.atai.ai/api/holiday/";

  getHolidays(param:any):Observable<any>{
    return this.http.get(this.holidayUrl,{params:param});
  }

  postLeaveUrl:string = "http://testvedika.atai.ai/api/leave/request/";

  postleave(body:any):Observable<any>{
    return this.http.post(this.postLeaveUrl,body)
  }

  deleteRequestUrl:string = "http://testvedika.atai.ai/api/leave/request/"

  deleteRequest(id:number):Observable<any>{
    return this.http.delete(this.deleteRequestUrl+id);
  }

  viewleavedetailsparams = new HttpParams().set("is_manager","false").set("leaves_in_last_n_days",60)

  viewleavedetails(id:number):Observable<any>{
    return this.http.get(this.deleteRequestUrl+id,{params:this.viewleavedetailsparams})
  }

  weekDataStatusUrl:string = "http://testvedika.atai.ai/api/compliance/"
  
  weekDataStatus():Observable<any>{
    return this.http.get(this.weekDataStatusUrl);
  }

  getHolidayUrl:string = "http://testvedika.atai.ai/api/location-holiday-cal/"

  holidayParams:HttpParams = new HttpParams().set("year",2023);

  getHolidayData():Observable<any>{
    return this.http.get(this.holidayUrl);
  }

  policyUrl:string = "http://testvedika.atai.ai/api/policy/emp-policy/";

  getPolicyData():Observable<any>{
    return this.http.get(this.policyUrl)
  }
}
