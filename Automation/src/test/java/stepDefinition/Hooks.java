package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Hooks {
	WebDriver driver;
	@Before("@Facebook")
	public void TestData() {
		 System.setProperty("webdriver.chrome.driver",
					"C:\\Users\\dinav\\Downloads\\chromedriver_win32_Version2.35\\chromedriver.exe");
			 driver = new ChromeDriver(); 
	  

	   
	    	driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			driver.get("https://www.facebook.com/");
	}
	
	 @Given("^User is in fb login page$")
	    public void user_is_in_fb_login_page() throws Throwable {
	    	String title1 = driver.getTitle();
	    	System.out.println(title1);
	      
	    }

	    @When("^the user enters username and pwd$")
	    public void the_user_enters_username_and_pwd() throws Throwable {
	    	driver.findElement(By.id("email")).sendKeys("ahsgvgcv");
	    	driver.findElement(By.id("pass")).sendKeys("5234gvgc");
	    	
	    }
	    
	    @And("^click login button$")
	    public void click_login_button() throws Throwable {
	    	driver.findElement(By.xpath("//input[@value='Log In']")).click();
	    }


	    @Then("^check whether logged in$")
	    public void check_whether_logged_in() throws Throwable {
	    	String title2 = driver.getTitle();
	    	System.out.println(title2);
	        	    }
	    
	
	@After("@Facebook")
	public void testteardown()
		{
		driver.close();
	}
	
	

}
