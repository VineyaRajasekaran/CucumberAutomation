package stepDefinition;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@RunWith(Cucumber.class)
public class StepDefination {

	WebDriver driver;
	String collect;
	JavascriptExecutor js;
	String script;
	
	@Given("^browser details$")
    public void browser_details() throws Throwable {
	 System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\dinav\\Downloads\\chromedriver_win32_Version2.35\\chromedriver.exe");
		driver = new ChromeDriver(); 
    }

    @When("^browser trigerred to KSRTC website$")
    public void browser_trigerred_to_ksrtc_website() throws Throwable {
    	driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.get("https://www.ksrtc.in/oprs-web/");
    }
    
    @Then("^check whether browser is opened\\.$")
    public void check_whether_browser_is_opened() throws Throwable {
      String title = driver.getTitle();
      System.out.println(title);
    }

    @Given("^the browser opens$")
    public void the_browser_opens() throws Throwable {
    	 System.out.println("browsed opened");
    
    }


	   

	@Given("^User is in KSRTC Home Page$")
	public void user_is_in_ksrtc_home_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\dinav\\Downloads\\chromedriver_win32_Version2.35\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.get("https://www.ksrtc.in/oprs-web/");
	}

	
	@Then("^check whether it has BENGALURU AIRPORT in dropdown$")
	public void check_whether_it_has_bengaluru_airport_in_dropdown() throws Throwable {
		int i = 0;
		while (!collect.equalsIgnoreCase("BENGALURU INTERNATION AIPORT")) {
			i++;
			driver.findElement(By.id("fromPlaceName")).sendKeys(Keys.DOWN);
			collect = (String) js.executeScript(script);
			System.out.println(collect);
			if (i > 10) {
				break;
			}

		}

		if (i > 10)
			System.out.println("Element not found");
		else
			System.out.println("Element  found");

	}
	
	

	    @Then("^check whether it has CHENNAI in dropdown$")
	    public void check_whether_it_has_chennai_in_dropdown() throws Throwable {
	    	int i = 0;
			while (!collect.equalsIgnoreCase("CHENNAI")) {
				i++;
				driver.findElement(By.id("toPlaceName")).sendKeys(Keys.DOWN);
				collect = (String) js.executeScript(script);
				System.out.println(collect);
				if (i > 10) {
					break;
				}

			}

			if (i > 10)
				System.out.println("Element not found");
			else
				System.out.println("Element  found");

	       
	    }
	    
	    @When("^the user enters \"([^\"]*)\"$")
	    public void the_user_enters_something(String strArg1) throws Throwable {
	        if(strArg1.equalsIgnoreCase("BENG")) {
	        	driver.findElement(By.id("fromPlaceName")).sendKeys("BENG");
	        	String test = driver.findElement(By.id("fromPlaceName")).getText();
	    		System.out.println(test);

	    		js = (JavascriptExecutor) driver;
	    		script = "return document.getElementById(\"fromPlaceName\").value";
	    		collect = (String) js.executeScript(script);
	    		System.out.println(collect);
	        }
	        else
	        {
	        	 driver.findElement(By.id("toPlaceName")).sendKeys(strArg1);

	 			String test = driver.findElement(By.id("toPlaceName")).getText();
	 			System.out.println(test);

	 			js = (JavascriptExecutor) driver;
	 			script = "return document.getElementById(\"toPlaceName\").value";
	 			collect = (String) js.executeScript(script);
	 			System.out.println(collect);
	        	
	        }
	    }
	    
	    @When("^the user enters travel information$")
	    public void the_user_enters_travel_information(DataTable data) throws Throwable {
	    	List<List<String>> obj = data.raw();
	    	
	    	
	    	driver.findElement(By.id("fromPlaceName")).sendKeys(obj.get(0).get(0));
	    	driver.findElement(By.id("toPlaceName")).sendKeys(obj.get(0).get(1));
	    	//driver.findElement(By.id("fromPlaceName")).sendKeys(obj.get(1).get(0));
	    	//driver.findElement(By.id("toPlaceName")).sendKeys(obj.get(1).get(1));
	       
	    }

	    @Then("^check whether filled in the form$")
	    public void check_whether_filled_in_the_form() throws Throwable {
	        System.out.println("success");
	    }

	    
	    @When("^the user enters (.+) and (.+)travel information$")
	    public void the_user_enters_and_travel_information(String from, String to) throws Throwable {
	    	driver.findElement(By.id("fromPlaceName")).sendKeys(from);
	    	driver.findElement(By.id("toPlaceName")).sendKeys(to);
	       
	    }
	    
	    
	   
	    
	    


	   


}