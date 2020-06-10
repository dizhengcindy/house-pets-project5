class CompanySerializer < ActiveModel::Serializer
  
  attributes :id,:company_name, :adddress_line,
  :city,:state,:country,:zip, :picture1,:picture2,:picture3, :companyservices,:services,:services_types

  def services

    arr =[]
    # byebug
    self.object.companyservices.map{|cs|
  
    arr.push({id:cs.id ,service: cs.service.service_type, charge:cs.charge})}
    # self.object.services.map{|service| arr.push(service.service_type)}

    return arr
  end

  def services_types
    arr =[]
    # byebug
     self.object.services.map{|service| arr.push(service.service_type)}

    return arr
    
  end
end
