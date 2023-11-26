from langchain.agents import AgentExecutor
from langchain.chat_models import ChatOpenAI

# Define the models or tools you want to use
medical_model = ChatOpenAI(model="biogpt")

# Define the agent
agent = (
    {
        "input": lambda x: x["input"],
    }
    | medical_model
)

# Create an instance of AgentExecutor
agent_executor = AgentExecutor(agent=agent)

# Example usage
request = {"input": "I touched a plant and now I feel itchy, what should I do?"}
response = agent_executor.invoke(request)
print(response)  # Output: Response from the medical model
