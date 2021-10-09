using E_VOTING.Domain;
using E_VOTING.DTOs;
using E_VOTING.Services;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using E_VOTING.DTOs;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace E_VOTING.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;

        private readonly SignInManager<AppUser> _signInManager;

        private readonly TokenService _tokenService;
        private readonly IMediator _mediator;
        private readonly RoleManager<IdentityRole> _roleManager;



        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> SignInManager, TokenService tokenService, IMediator mediator, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _signInManager = SignInManager;
            _tokenService = tokenService;
            _mediator = mediator;
            _roleManager = roleManager;
        }

        [AllowAnonymous]
        [HttpPost("login")]

        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null) return Unauthorized();

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (result.Succeeded)
            {
                return CreateUserObject(user);
            }
            return Unauthorized();
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await _userManager.Users.AnyAsync(x => x.UserName == registerDto.UserName))
            {
                return BadRequest("username i zene");
            }

            if (await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
            {
                return BadRequest("Email i zene");
            }

            if (await _userManager.Users.AnyAsync(x => x.nrLeternjofimit == registerDto.nrLeternjofimit))
            {
                return BadRequest("Numri i leternjoftimit i zene");
            }

            var user = new AppUser
            {
                nrLeternjofimit = registerDto.nrLeternjofimit,
                UserName = registerDto.UserName,
                Email = registerDto.Email,
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);
            
            
            if (result.Succeeded)
            {
           await _userManager.AddToRoleAsync(user, "Basic");
                return CreateUserObject(user);
            }

            return BadRequest("Problem gjate regjistrimit te userit");
        }

        [AllowAnonymous]
        [HttpGet("userat")]
        public IActionResult ListUsers()
        {
            var users = _userManager.Users;
            return Ok(users);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            var user = await _userManager.FindByIdAsync(id);

            var result = await _userManager.DeleteAsync(user);

            return Ok("ListUsers");
        }

        [Authorize]
        [AllowAnonymous]
        [HttpPut("{Id}")]
        public async Task<ActionResult<Unit>> Edit(string Id, EditUser.Command command)
        {
            command.Id = Id; 
            return await _mediator.Send(command);
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetCurrentUser(UserDto userDto)
        {
            //var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            var user = await _userManager.FindByEmailAsync(userDto.Email);

            return CreateUserObject(user);
        }

        private UserDto CreateUserObject(AppUser user)
        {
            return new UserDto
            {
                nrLeternjofimit = user.nrLeternjofimit,
                Email=user.Email,
                token = _tokenService.CreateToken(user),
                UserName = user.UserName             
        };
        }
    }



    }

