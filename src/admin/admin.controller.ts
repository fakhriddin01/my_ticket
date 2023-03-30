import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { LogoutAdminDto } from './dto/logout-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('signup')
  registration(@Body() createCustomerDto: CreateAdminDto) {
    return this.adminService.registration(createCustomerDto);
  }

  @Post('signin')
  singin(@Body() loginUserDto: LoginAdminDto) {
    return this.adminService.sigin(loginUserDto);
  }

  @Post(':id/signout')
  singout(@Param('id') id: string, @Body() logoutUserDto: LogoutAdminDto) {
    return this.adminService.singout(+id, logoutUserDto);
  }


  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
