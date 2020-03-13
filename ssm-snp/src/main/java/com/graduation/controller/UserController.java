package com.graduation.controller;

import com.graduation.common.AssembleResponseMsg;
import com.graduation.model.ResponseBody;
import com.graduation.model.UserInformation;
import com.graduation.service_api.IMailService;
import com.graduation.service_api.IUserService;
import com.graduation.service_impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {
    @Autowired
    private IUserService userService;


    @RequestMapping(value = "/login",produces = "application/json;charset=utf-8")
    public ResponseBody login(@RequestBody Map<String,Object> map){
        Map<String,String> all = new HashMap<>();
        String userId = userService.login(map);
        if (userId != null){
            all.put("userId", userId);
            return new AssembleResponseMsg().success(all);
        }else {
            return new AssembleResponseMsg().failure(200,"error","用户名或密码错误");
        }
    }

    @RequestMapping(value = "/register",produces = "application/json;charset=utf-8")
    public ResponseBody register(@RequestBody Map<String,Object> map){
        Map<String,String> all = new HashMap<>();
        Integer number = userService.queryUser(map);
        if (number == 0){
            try{
                userService.addUser(map);
                return new AssembleResponseMsg().success(all);
            }catch (Exception exception){
                return new AssembleResponseMsg().failure(200,"error","注册失败,服务器错误");
            }

        }else {
            return new AssembleResponseMsg().failure(200,"error","此账户已被注册");
        }
    }

    @RequestMapping(value = "/userInformation",produces = "application/json;charset=utf-8")
    public ResponseBody userInformation(@RequestBody Map<String,Object> map){
        Map<String,String> all = new HashMap<>();
        UserInformation userInformation = userService.userInformation(map);
        if (userInformation != null){
            System.out.println("11111111111111111111111111");
            System.out.println(userInformation);
            all.put("userId", userInformation.getUserId());
            all.put("userName", userInformation.getUserName());
            all.put("mail", userInformation.getMail());
            all.put("telephone", userInformation.getTelephone());
            all.put("sex", userInformation.getSex());
            all.put("birthday", userInformation.getBirthday().toString());
            all.put("synopsis", userInformation.getSynopsis());
            return new AssembleResponseMsg().success(all);
        }else {
            return new AssembleResponseMsg().failure(200,"error","没有此用户");
        }
    }
//      关闭此接口，容易被非法攻击
//    @RequestMapping(value = "/updateMail",produces = "application/json;charset=utf-8")
//    public ResponseBody updateMail(@RequestBody Map<String,Object> map) {
//        Map<String, String> all = new HashMap<>();
//        try {
//            userService.updateMail(map);
//        } catch (Exception e) {
//            return new AssembleResponseMsg().failure(200, "error", "邮箱更新出错，请重试");
//        }
//        return new AssembleResponseMsg().success(all);
//    }

    @RequestMapping(value = "/queryMail",produces = "application/json;charset=utf-8")
    public ResponseBody queryMail(@RequestBody Map<String,Object> map) {
        Map<String, String> all = new HashMap<>();
        Integer number = userService.queryMail(map);
        if (number == 0){
            return new AssembleResponseMsg().success(all);
        }else {
            return new AssembleResponseMsg().failure(200, "error", "邮箱已注册，请更换邮箱");
        }
    }

    @RequestMapping(value = "/userIdfromMail",produces = "application/json;charset=utf-8")
    public ResponseBody userIdfromMail(@RequestBody Map<String,Object> map) {
        Map<String, String> all = new HashMap<>();
        String userId = userService.userIdfromMail(map);
        if (userId != null){
            all.put("userId", userId);
            return new AssembleResponseMsg().success(all);
        }else {
            return new AssembleResponseMsg().failure(200, "error", "此邮箱未绑定用户");
        }
    }
    @RequestMapping(value = "/mailfromUserId",produces = "application/json;charset=utf-8")
    public ResponseBody mailfromUserId(@RequestBody Map<String,Object> map) {
        Map<String, String> all = new HashMap<>();
        String mail = userService.mailfromUserId(map);
        if (mail != null){
            all.put("mail", mail);
            return new AssembleResponseMsg().success(all);
        }else {
            return new AssembleResponseMsg().failure(200, "error", "此用户未绑定邮箱，无法进行此操作");
        }
    }
}