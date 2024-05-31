const EmployeeServices = {
    async getEmployeDetail(data) {
        let response = await ExecuteGet(`/api/empolyee/${data}`)
        return response
    }
}