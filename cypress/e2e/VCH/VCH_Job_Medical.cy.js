import * as random from '../random.js';
describe('template spec', () => {
  it('passes', () => {
    //เข้าเว็บและล็อคอิน
    cy.visit('https://vch-dev.smoothdark.com/en/applicant')
    cy.get('#email_login').type('saurabh@smoothgraph.in')
    cy.get('#password').type('123456')
    cy.get('#btn_login_email').click('')
    cy.get('[href="https://vch-dev.smoothdark.com/en/applicant/medical/job-list"]').click()
    cy.get('.date-btn-wrap > .btn').click()
    //salary เงินเดือน
    cy.get(':nth-child(2) > :nth-child(1) > .input-group > .form-control').type(random.number(5))
    //วันเริ่มงาน
    cy.get(':nth-child(2) > .date-picker').click()
    cy.wait(1000)
    cy.get('.arrowTop > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .today').click()
    //Personal Information
    cy.get('#salutation').select('Doctor Woman')
    //ชื่อ
    cy.get(':nth-child(3) > .box-content > :nth-child(2) > :nth-child(1) > input').type((random.string_eng(5)))
    //นามสกุล
    cy.get(':nth-child(3) > .box-content > :nth-child(2) > :nth-child(2) > input').type((random.string_eng(5)))
    //ชื่อเล่น
    cy.get(':nth-child(3) > .col-md-6 > input').type((random.string_eng(5)))
    //วันเกิด
    cy.get('.flatpicker').click()
    cy.wait(1000)
    cy.get('.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .today').click()
    //อายุ
    cy.get('.box-content > :nth-child(4) > :nth-child(2) > input').type(random.number(2))
    //ส่วนสูง
    cy.get(':nth-child(5) > :nth-child(1) > .input-group > .form-control').type(random.number(3))
    //น้ำหนัก
    cy.get(':nth-child(2) > .input-group > .form-control').type(random.number(2))
    //เลขบัตรปชช.
    cy.get('.col-md-6.input-group > input').type(random.number(13))
    //เบอรโทร
    cy.get('.select_country > [type="text"]').type(random.number(10))
    //อีเมล
    cy.get('#inlineFormInputGroup').type('email@email')
    //เพศ
    cy.get(':nth-child(8) > .form-group > :nth-child(2) > .radio-label').click()
    //เลขที่อยู่
    cy.get(':nth-child(9) > .col-md-12 > input').type('111/111')
    //Educational Record
    //High vocational certificate
    cy.get(':nth-child(4) > .box-content > :nth-child(1) > .form-row > :nth-child(1) > input').type('ABC University')
    cy.get(':nth-child(4) > .box-content > :nth-child(1) > .form-row > :nth-child(2) > input').type('Doctor')
    cy.get(':nth-child(4) > .box-content > :nth-child(1) > .form-row > :nth-child(3) > input').type('Medical')
    cy.get(':nth-child(1) > .form-row > :nth-child(4) > .date-picker').click()
    cy.wait(1000)
    cy.get('.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .today').click()
    cy.get(':nth-child(4) > .box-content > :nth-child(1) > .form-row > :nth-child(5) > input').type(random.number(1) + '.' + random.number(2))
    //Upper secondary
    cy.get('.box-content > :nth-child(2) > .form-row > :nth-child(1) > input').type('ABC School')
    cy.get('.box-content > :nth-child(2) > .form-row > :nth-child(2) > input').type('Doctor')
    cy.get(':nth-child(2) > .form-row > :nth-child(3) > input').type('Medical')
    cy.get(':nth-child(2) > .form-row > :nth-child(4) > .date-picker').click()
    cy.wait(1000)
    cy.get('.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .today').click()
    cy.get(':nth-child(2) > .form-row > :nth-child(5) > input').type(random.number(1) + '.' + random.number(2))
    //Bachelor degree
    cy.get(':nth-child(3) > .form-row > :nth-child(1) > input').type('ABC University')
    cy.get(':nth-child(3) > .form-row > :nth-child(2) > input').type('Doctor')
    cy.get(':nth-child(3) > .form-row > :nth-child(3) > input').type('Medical')
    cy.get(':nth-child(3) > .form-row > :nth-child(4) > .date-picker').click()
    cy.wait(1000)
    cy.get('.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .today').click()
    cy.get(':nth-child(3) > .form-row > :nth-child(5) > input').type(random.number(1) + '.' + random.number(2))
    //Master degree
    cy.get(':nth-child(4) > .form-row > :nth-child(1) > input').type('ABC University')
    cy.get(':nth-child(4) > .form-row > :nth-child(2) > input').type('Doctor')
    cy.get(':nth-child(4) > .form-row > :nth-child(3) > input').type('Medical')
    cy.get(':nth-child(4) > .form-row > :nth-child(4) > .date-picker').click()
    cy.wait(1000)
    cy.get('.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .today').click()
    cy.get(':nth-child(4) > .form-row > :nth-child(5) > input').type(random.number(1) + '.' + random.number(2))
    //Other
    cy.get(':nth-child(4) > .box-content > .mb-0 > .form-row > :nth-child(1) > input').type('ABC University')
    cy.get(':nth-child(4) > .box-content > .mb-0 > .form-row > :nth-child(2) > input').type('Doctor')
    cy.get(':nth-child(4) > .box-content > .mb-0 > .form-row > :nth-child(3) > input').type('Medical')
    cy.get('.mb-0 > .form-row > :nth-child(4) > .date-picker').click()
    cy.wait(1000)
    cy.get('.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .today').click()
    cy.get(':nth-child(4) > .box-content > .mb-0 > .form-row > :nth-child(5) > input').type(random.number(1) + '.' + random.number(2))
    //Work history
    //ชื่อบริษัท
    cy.get(':nth-child(5) > .box-content > .edcation-row-wrap > .form-row > :nth-child(1) > input').type('ABC Company')
    //เงินเดือน
    cy.get('.form-row > :nth-child(2) > .text-right').type(random.number(5))
    //รายได้เสริม/รายได้อื่น
    cy.get(':nth-child(3) > .text-right').type(random.number(5))
    //ตำแหน่งงาน
    cy.get(':nth-child(5) > .box-content > .edcation-row-wrap > .form-row > :nth-child(4) > input').type('Surgeon Doctor')
    //วันที่เริ่มงาน
    cy.get(':nth-child(5) > .date-picker').click()
    cy.wait(1000)
    cy.get('.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .today').click()
    //วันสุดท้ายที่ทำงาน
    cy.get(':nth-child(6) > .date-picker').click()
    cy.wait(1000)
    cy.get('.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .today').click()
    //เหตุผลที่ลาออก
    cy.get(':nth-child(7) > input').type('I want more money')
    //รายละเอียดงาน
    cy.get(':nth-child(8) > input').type('Cast skill heal on tank')
    //Training History
    cy.get(':nth-child(6) > .box-content > .edcation-row-wrap > .form-row > :nth-child(1) > input').type('Doctor training')
    cy.get(':nth-child(2) > .d-flex > :nth-child(1) > input').type('01/01/2023')
    cy.get('.d-flex > :nth-child(3) > input').type('01/03/2023')
    cy.get(':nth-child(6) > .box-content > .edcation-row-wrap > .form-row > :nth-child(3) > input').type('2 month')
    cy.get(':nth-child(6) > .box-content > .edcation-row-wrap > .form-row > :nth-child(4) > input').type('ABC University')
    cy.get(':nth-child(6) > .box-content > .edcation-row-wrap > .form-row > :nth-child(5) > input').type('Doctor')
    //Language
    cy.get('.col-md-12 > .radio-wrap > .radio-label').click()
    cy.get('.form-row > .pl-3 > [type="text"]').type('English')
    cy.get(':nth-child(2) > .w-100 > :nth-child(3) > .radio-label').click()
    cy.get('.pl-3 > :nth-child(3) > .w-100 > :nth-child(2) > .radio-label').click()
    cy.get('.pl-3 > :nth-child(4) > .w-100 > :nth-child(1) > .radio-label').click()
    cy.get(':nth-child(5) > .w-100 > :nth-child(1) > .radio-label').click()
    //ขับรถ
    cy.get('.box-content > :nth-child(3) > .w-100 > :nth-child(1) > .radio-label').click()
    cy.get(':nth-child(8) > .box-content > :nth-child(4) > .w-100 > :nth-child(1) > .radio-label').click()
    cy.get(':nth-child(8) > .box-content > :nth-child(4) > .w-100 > .pl-4 > input').type(random.number(8))
    //ขับมอไซ
    cy.get(':nth-child(6) > .w-100 > :nth-child(1) > .radio-label').click()
    cy.get(':nth-child(7) > .w-100 > :nth-child(1) > .radio-label').click()
    cy.get(':nth-child(7) > .w-100 > .pl-4 > input').type(random.number(8))
    //ความสามารถพิเศษ
    cy.get(':nth-child(8) > .box-content > .edcation-row-wrap > .edcation-form-row > .form-group > input').type('CPR')
    //Job application information
    //เหตุผลที่อยากร่วมงานกับ vch
    cy.get(':nth-child(1) > textarea').type('good salary')
    //เคยทำงานที่นี่มาก่อนไหม
    cy.get(':nth-child(9) > .box-content > :nth-child(4) > .w-100 > :nth-child(3) > .radio-label').click()
    cy.get(':nth-child(6) > .form-group > .radio-wrap > .radio-label').click()
    cy.get(':nth-child(9) > .box-content > :nth-child(8) > :nth-child(2) > .radio-wrap > .radio-label').click()
    cy.get(':nth-child(9) > .box-content > :nth-child(10) > .form-group > .radio-wrap > .radio-label').click()
    cy.get('.form-groups > textarea').type('none')
    //อัพรูป
    cy.get('#customFile').selectFile('cypress/fixtures/doctor.jpg')
    cy.get('#customFile2').selectFile('cypress/fixtures/cer.jpg')
    cy.get('#customFile3').selectFile('cypress/fixtures/id.png')
    cy.get(':nth-child(4) > .custom-file > #customFile4').selectFile('cypress/fixtures/cer.jpg')
    cy.get('#customFile5').selectFile('cypress/fixtures/cer.jpg')
    cy.get('#customFile6').selectFile('cypress/fixtures/cer.jpg')
    cy.get('#customFile7').selectFile('cypress/fixtures/license.png')
    cy.get(':nth-child(8) > .custom-file > #customFile4').selectFile('cypress/fixtures/license.png')
    cy.get('#customFile9').selectFile('cypress/fixtures/license.png')
    cy.get('#customFile11').selectFile('cypress/fixtures/cer.jpg')
    //ติ๊กยินยอม
    cy.get(':nth-child(12) > .chk-wrap > .chkmark').click()
    //submit
    cy.get('#medical_registers').click()
    //คำถาม questionaire
    cy.get(':nth-child(3) > .box-content > :nth-child(1) > .radio-wrap > .radio-label').click()
    cy.get(':nth-child(4) > .box-content > :nth-child(1) > .radio-wrap > .radio-label').click()
    cy.get(':nth-child(5) > .box-content > :nth-child(1) > .radio-wrap > .radio-label').click()
    cy.get(':nth-child(6) > .box-content > :nth-child(1) > .radio-wrap > .radio-label').click()
    cy.get(':nth-child(7) > .box-content > :nth-child(1) > .radio-wrap > .radio-label').click()
    cy.get(':nth-child(8) > .box-content > :nth-child(1) > .radio-wrap > .radio-label').click()
    cy.get(':nth-child(9) > .box-content > :nth-child(1) > .radio-wrap > .radio-label').click()
    cy.get(':nth-child(10) > .box-content > :nth-child(1) > .radio-wrap > .radio-label').click()
    cy.get(':nth-child(11) > .box-content > :nth-child(1) > .radio-wrap > .radio-label').click()
    cy.get(':nth-child(12) > .box-content > :nth-child(1) > .radio-wrap > .radio-label').click()
    cy.get('#question_submit').click()
  })
})